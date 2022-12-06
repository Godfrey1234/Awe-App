/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ContentChildren, QueryList, ContentChild, Renderer2, } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
import { CloudinaryPlaceHolder } from './cloudinary-placeholder.component';
import { isBrowser } from './cloudinary.service';
import { SDKAnalyticsConstants } from './SDKAnalyticsConstants';
export class CloudinaryImage {
    /**
     * @param {?} el
     * @param {?} cloudinary
     * @param {?} renderer
     */
    constructor(el, cloudinary, renderer) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.onLoad = new EventEmitter(); // Callback when an image is loaded successfully
        // Callback when an image is loaded successfully
        this.onError = new EventEmitter(); // Callback when an image is loaded with error
        this.shouldShowPlaceHolder = true;
        this.options = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(() => {
                this.loadImage();
            });
            // Observe changes to attributes or child transformations to re-render the image
            /** @type {?} */
            const config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadImage();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadImage();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.width && this.placeholderComponent) {
            this.placeholderComponent.setWidth(this.width);
        }
        if (this.height && this.placeholderComponent) {
            this.placeholderComponent.setHeight(this.height);
        }
        if (this.placeholderComponent) {
            this.placeholderComponent.setPublicId(this.publicId);
        }
    }
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    setPlaceHolderStyle() {
        if (this.shouldShowPlaceHolder) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'absolute');
        }
        else {
            // note this only removes styling from cl-img->img and not cl-img
            this.renderer.removeAttribute(this.el.nativeElement.children[0], 'style');
        }
    }
    /**
     * @return {?}
     */
    hasLoaded() {
        this.shouldShowPlaceHolder = false;
    }
    /**
     * @return {?}
     */
    loadImage() {
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = e => {
                this.onLoad.emit(e);
            };
            image.onerror = e => {
                this.onError.emit(e);
            };
            this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            if (this.clientHints || (typeof this.clientHints === 'undefined' && this.cloudinary.config().client_hints)) {
                delete this.options['class'];
                delete this.options['data-src'];
                delete this.options['responsive'];
            }
            if (this.cloudinary.config().urlAnalytics) {
                this.options = Object.assign({}, SDKAnalyticsConstants, this.options);
            }
            if (this.placeholderComponent) {
                this.placeholderHandler(this.options, image);
            }
            if (this.accessibility) {
                this.options['src'] = this.accessibilityModeHandler();
            }
            /** @type {?} */
            const imageTag = this.cloudinary.imageTag(this.publicId, this.options);
            this.setElementAttributes(image, imageTag.attributes());
            if (this.options['responsive']) {
                this.cloudinary.responsive(image, this.options);
            }
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            /** @type {?} */
            const attr = attrName === 'src' && this.loading === 'lazy' ? 'data-src' : attrName;
            this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
        });
        // Enforcing placeholder style
        if (this.placeholderComponent) {
            this.setPlaceHolderStyle();
        }
    }
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    placeholderHandler(options, image) {
        /** @type {?} */
        const placeholderOptions = Object.assign({}, options);
        if (placeholderOptions['width']) {
            if (placeholderOptions['width'] === 'auto') {
                placeholderOptions['width'] = image.getAttribute('data-width');
            }
        }
        this.placeholderComponent.options = placeholderOptions;
    }
    /**
     * @return {?}
     */
    accessibilityModeHandler() {
        return this.cloudinary.url(this.publicId, Object.assign({ accessibility: this.accessibility }, this.options));
    }
}
CloudinaryImage.decorators = [
    { type: Component, args: [{
                selector: 'cl-image',
                template: `<img (load)="hasLoaded()">
  <div *ngIf="placeholderComponent && shouldShowPlaceHolder" [style.display]="shouldShowPlaceHolder ? 'inline' : 'none'">
    <ng-content></ng-content>
  </div>
  `
            }] }
];
/** @nocollapse */
CloudinaryImage.ctorParameters = () => [
    { type: ElementRef },
    { type: Cloudinary },
    { type: Renderer2 }
];
CloudinaryImage.propDecorators = {
    publicId: [{ type: Input, args: ['public-id',] }],
    clientHints: [{ type: Input, args: ['client-hints',] }],
    loading: [{ type: Input, args: ['loading',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    accessibility: [{ type: Input, args: ['accessibility',] }],
    transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }],
    placeholderComponent: [{ type: ContentChild, args: [CloudinaryPlaceHolder,] }],
    onLoad: [{ type: Output }],
    onError: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CloudinaryImage.prototype.publicId;
    /** @type {?} */
    CloudinaryImage.prototype.clientHints;
    /** @type {?} */
    CloudinaryImage.prototype.loading;
    /** @type {?} */
    CloudinaryImage.prototype.width;
    /** @type {?} */
    CloudinaryImage.prototype.height;
    /** @type {?} */
    CloudinaryImage.prototype.accessibility;
    /** @type {?} */
    CloudinaryImage.prototype.transformations;
    /** @type {?} */
    CloudinaryImage.prototype.placeholderComponent;
    /** @type {?} */
    CloudinaryImage.prototype.onLoad;
    /** @type {?} */
    CloudinaryImage.prototype.onError;
    /** @type {?} */
    CloudinaryImage.prototype.observer;
    /** @type {?} */
    CloudinaryImage.prototype.shouldShowPlaceHolder;
    /** @type {?} */
    CloudinaryImage.prototype.options;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.cloudinary;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLFNBQVMsRUFPVCxZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU8seUJBQXlCLENBQUM7QUFVakUsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQXFCMUIsWUFBb0IsRUFBYyxFQUFVLFVBQXNCLEVBQVUsUUFBbUI7UUFBM0UsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUHJGLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLGdEQUFnRDs7UUFDcEcsWUFBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsOENBQThDO1FBRzdHLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3QixZQUFPLEdBQVcsRUFBRSxDQUFDO0lBRTZFLENBQUM7Ozs7SUFFbkcsUUFBUTtRQUNOLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJ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QUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBRyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEcsQ0FBQzs7O1lBektGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7OztZQTVCQyxVQUFVO1lBZUgsVUFBVTtZQUZqQixTQUFTOzs7dUJBa0JSLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsY0FBYztzQkFDcEIsS0FBSyxTQUFDLFNBQVM7b0JBQ2YsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7NEJBRWQsS0FBSyxTQUFDLGVBQWU7OEJBRXJCLGVBQWUsU0FBQyxpQ0FBaUM7bUNBRWpELFlBQVksU0FBQyxxQkFBcUI7cUJBRWxDLE1BQU07c0JBQ04sTUFBTTs7OztJQWJQLG1DQUFxQzs7SUFDckMsc0NBQTZDOztJQUM3QyxrQ0FBa0M7O0lBQ2xDLGdDQUErQjs7SUFDL0IsaUNBQWlDOztJQUVqQyx3Q0FBK0M7O0lBRS9DLDBDQUM4RDs7SUFDOUQsK0NBQWlGOztJQUVqRixpQ0FBNkQ7O0lBQzdELGtDQUE4RDs7SUFFOUQsbUNBQTJCOztJQUMzQixnREFBNkI7O0lBQzdCLGtDQUFxQjs7Ozs7SUFFVCw2QkFBc0I7Ozs7O0lBQUUscUNBQThCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgQ29udGVudENoaWxkLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xvdWRpbmFyeSB9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2xvdWRpbmFyeS10cmFuc2Zvcm1hdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2xvdWRpbmFyeVBsYWNlSG9sZGVyIH0gZnJvbSAnLi9jbG91ZGluYXJ5LXBsYWNlaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTREtBbmFseXRpY3NDb25zdGFudHMgfSAgZnJvbSAnLi9TREtBbmFseXRpY3NDb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbC1pbWFnZScsXG4gIHRlbXBsYXRlOiBgPGltZyAobG9hZCk9XCJoYXNMb2FkZWQoKVwiPlxuICA8ZGl2ICpuZ0lmPVwicGxhY2Vob2xkZXJDb21wb25lbnQgJiYgc2hvdWxkU2hvd1BsYWNlSG9sZGVyXCIgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkU2hvd1BsYWNlSG9sZGVyID8gJ2lubGluZScgOiAnbm9uZSdcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5SW1hZ2VcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCdwdWJsaWMtaWQnKSBwdWJsaWNJZDogc3RyaW5nO1xuICBASW5wdXQoJ2NsaWVudC1oaW50cycpIGNsaWVudEhpbnRzPzogYm9vbGVhbjtcbiAgQElucHV0KCdsb2FkaW5nJykgbG9hZGluZzogc3RyaW5nO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg/OiBzdHJpbmc7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYWNjZXNzaWJpbGl0eScpIGFjY2Vzc2liaWxpdHk/OiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUpXG4gIHRyYW5zZm9ybWF0aW9uczogUXVlcnlMaXN0PENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGQoQ2xvdWRpbmFyeVBsYWNlSG9sZGVyKSBwbGFjZWhvbGRlckNvbXBvbmVudDogQ2xvdWRpbmFyeVBsYWNlSG9sZGVyO1xuXG4gIEBPdXRwdXQoKSBvbkxvYWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gQ2FsbGJhY2sgd2hlbiBhbiBpbWFnZSBpcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5XG4gIEBPdXRwdXQoKSBvbkVycm9yOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIENhbGxiYWNrIHdoZW4gYW4gaW1hZ2UgaXMgbG9hZGVkIHdpdGggZXJyb3JcblxuICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgc2hvdWxkU2hvd1BsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgb3B0aW9uczogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjbG91ZGluYXJ5OiBDbG91ZGluYXJ5LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKGlzQnJvd3NlcigpKSB7XG4gICAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2VcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICB9KTtcbiAgICAgIC8vIE9ic2VydmUgY2hhbmdlcyB0byBhdHRyaWJ1dGVzIG9yIGNoaWxkIHRyYW5zZm9ybWF0aW9ucyB0byByZS1yZW5kZXIgdGhlIGltYWdlXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9O1xuXG4gICAgICAvLyBwYXNzIGluIHRoZSB0YXJnZXQgbm9kZSwgYXMgd2VsbCBhcyB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gdGhlIGRhdGEtYm91bmQgcHJvcGVydHkgJ3B1YmxpY0lkJy5cbiAgICAvLyBVcGRhdGUgY29tcG9uZW50IHVubGVzcyB0aGlzIGlzIHRoZSBmaXJzdCB2YWx1ZSBhc3NpZ25lZC5cbiAgICBpZiAoY2hhbmdlcy5wdWJsaWNJZCAmJiAhY2hhbmdlcy5wdWJsaWNJZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KSB7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy53aWR0aCAmJiB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50LnNldFdpZHRoKHRoaXMud2lkdGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oZWlnaHQgJiYgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudC5zZXRIZWlnaHQodGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudC5zZXRQdWJsaWNJZCh0aGlzLnB1YmxpY0lkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYXBwZW5kcyBvcGFjaXR5IGFuZCBwb3NpdGlvbiB0byBjbC1pbWctPmltZyB3aGVuIHBsYWNlaG9sZGVyIGlzIGRpc3BsYXllZFxuICAgKiByZW1vdmVzIHN0eWxpbmcgZnJvbSBjbC1pbWctPmltZyB3aGVuIHBsYWNlaG9sZGVyIGRvZXMgbm90IGRpc3BsYXlcbiAgICovXG4gIHNldFBsYWNlSG9sZGVyU3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvd1BsYWNlSG9sZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ29wYWNpdHknLCAnMCcgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdGUgdGhpcyBvbmx5IHJlbW92ZXMgc3R5bGluZyBmcm9tIGNsLWltZy0+aW1nIGFuZCBub3QgY2wtaW1nXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sICdzdHlsZScpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0xvYWRlZCgpIHtcbiAgICB0aGlzLnNob3VsZFNob3dQbGFjZUhvbGRlciA9IGZhbHNlO1xuICB9XG5cbiAgbG9hZEltYWdlKCkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbCN1bml2ZXJzYWwtZ290Y2hhc1xuICAgIC8vIEZldGNoIHRoZSBpbWFnZSBvbmx5IGZvciBjbGllbnQgc2lkZSByZW5kZXJpbmcgYnkgdGhlIGJyb3dzZXJcbiAgICBpZiAoaXNCcm93c2VyKCkpIHtcbiAgICAgIGlmICghdGhpcy5wdWJsaWNJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1lvdSBtdXN0IHNldCB0aGUgcHVibGljIGlkIG9mIHRoZSBpbWFnZSB0byBsb2FkLCBlLmcuIDxjbC1pbWFnZSBwdWJsaWMtaWQ9e3twaG90by5wdWJsaWNfaWR9fS4uLj48L2NsLWltYWdlPidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCBpbWFnZSA9IG5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICAvLyBBZGQgb25sb2FkIGFuZCBvbmVycm9yIGhhbmRsZXJzXG4gICAgICBpbWFnZS5vbmxvYWQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5vbkxvYWQuZW1pdChlKTtcbiAgICAgIH07XG4gICAgICBpbWFnZS5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvci5lbWl0KGUpO1xuICAgICAgfTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xvdWRpbmFyeS50b0Nsb3VkaW5hcnlBdHRyaWJ1dGVzKFxuICAgICAgICBuYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMsXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRpb25zXG4gICAgICApO1xuICAgICAgaWYgKHRoaXMuY2xpZW50SGludHMgfHwgKHR5cGVvZiB0aGlzLmNsaWVudEhpbnRzID09PSAndW5kZWZpbmVkJyAmJiB0aGlzLmNsb3VkaW5hcnkuY29uZmlnKCkuY2xpZW50X2hpbnRzKSkge1xuICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zWydjbGFzcyddO1xuICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zWydkYXRhLXNyYyddO1xuICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zWydyZXNwb25zaXZlJ107XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbG91ZGluYXJ5LmNvbmZpZygpLnVybEFuYWx5dGljcykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7Li4uU0RLQW5hbHl0aWNzQ29uc3RhbnRzLCAuLi50aGlzLm9wdGlvbnN9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVySGFuZGxlcih0aGlzLm9wdGlvbnMsIGltYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYWNjZXNzaWJpbGl0eSkge1xuICAgICAgICB0aGlzLm9wdGlvbnNbJ3NyYyddID0gdGhpcy5hY2Nlc3NpYmlsaXR5TW9kZUhhbmRsZXIoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1hZ2VUYWcgPSB0aGlzLmNsb3VkaW5hcnkuaW1hZ2VUYWcodGhpcy5wdWJsaWNJZCwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMuc2V0RWxlbWVudEF0dHJpYnV0ZXMoaW1hZ2UsIGltYWdlVGFnLmF0dHJpYnV0ZXMoKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zWydyZXNwb25zaXZlJ10pIHtcbiAgICAgICAgdGhpcy5jbG91ZGluYXJ5LnJlc3BvbnNpdmUoaW1hZ2UsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlc0xpdGVyYWwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzTGl0ZXJhbCkuZm9yRWFjaChhdHRyTmFtZSA9PiB7XG4gICAgICBjb25zdCBhdHRyID0gYXR0ck5hbWUgPT09ICdzcmMnICYmIHRoaXMubG9hZGluZyA9PT0gJ2xhenknID8gJ2RhdGEtc3JjJyA6IGF0dHJOYW1lO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0ciwgYXR0cmlidXRlc0xpdGVyYWxbYXR0ck5hbWVdKTtcbiAgICB9KTtcblxuICAgIC8vIEVuZm9yY2luZyBwbGFjZWhvbGRlciBzdHlsZVxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnNldFBsYWNlSG9sZGVyU3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwbGFjZWhvbGRlciBvcHRpb25zXG4gICAqIEluIGNhc2Ugb2YgcmVzcG9uc2l2ZSBzZXRzIHdpZHRoIGZyb20gcmVzaXplXG4gICAqIEluIGNhc2Ugd2lkdGggb3IgaGVpZ2h0IGlzIGtub3duIHRha2VzIDEwJSBvZiBvcmlnaW5hbCBkaW1lbnNpb25cbiAgICovXG4gIHBsYWNlaG9sZGVySGFuZGxlcihvcHRpb25zLCBpbWFnZSkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIGlmIChwbGFjZWhvbGRlck9wdGlvbnNbJ3dpZHRoJ10pIHtcbiAgICAgIGlmIChwbGFjZWhvbGRlck9wdGlvbnNbJ3dpZHRoJ10gPT09ICdhdXRvJykge1xuICAgICAgICBwbGFjZWhvbGRlck9wdGlvbnNbJ3dpZHRoJ10gPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudC5vcHRpb25zID0gcGxhY2Vob2xkZXJPcHRpb25zO1xuICB9XG5cbiAgYWNjZXNzaWJpbGl0eU1vZGVIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNsb3VkaW5hcnkudXJsKHRoaXMucHVibGljSWQsIHthY2Nlc3NpYmlsaXR5OiB0aGlzLmFjY2Vzc2liaWxpdHksIC4uLnRoaXMub3B0aW9uc30pO1xuICB9XG59XG4iXX0=