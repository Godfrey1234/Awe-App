/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ContentChildren, QueryList, ContentChild, Renderer2, } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
import { CloudinaryPlaceHolder } from './cloudinary-placeholder.component';
import { isBrowser } from './cloudinary.service';
import { SDKAnalyticsConstants } from './SDKAnalyticsConstants';
var CloudinaryImage = /** @class */ (function () {
    function CloudinaryImage(el, cloudinary, renderer) {
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
    CloudinaryImage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(function () {
                _this.loadImage();
            });
            // Observe changes to attributes or child transformations to re-render the image
            /** @type {?} */
            var config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CloudinaryImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadImage();
        }
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.loadImage();
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.width && this.placeholderComponent) {
            this.placeholderComponent.setWidth(this.width);
        }
        if (this.height && this.placeholderComponent) {
            this.placeholderComponent.setHeight(this.height);
        }
        if (this.placeholderComponent) {
            this.placeholderComponent.setPublicId(this.publicId);
        }
    };
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     */
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    CloudinaryImage.prototype.setPlaceHolderStyle = /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    function () {
        if (this.shouldShowPlaceHolder) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'absolute');
        }
        else {
            // note this only removes styling from cl-img->img and not cl-img
            this.renderer.removeAttribute(this.el.nativeElement.children[0], 'style');
        }
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.hasLoaded = /**
     * @return {?}
     */
    function () {
        this.shouldShowPlaceHolder = false;
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.loadImage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = function (e) {
                _this.onLoad.emit(e);
            };
            image.onerror = function (e) {
                _this.onError.emit(e);
            };
            this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            if (this.clientHints || (typeof this.clientHints === 'undefined' && this.cloudinary.config().client_hints)) {
                delete this.options['class'];
                delete this.options['data-src'];
                delete this.options['responsive'];
            }
            if (this.cloudinary.config().urlAnalytics) {
                this.options = tslib_1.__assign({}, SDKAnalyticsConstants, this.options);
            }
            if (this.placeholderComponent) {
                this.placeholderHandler(this.options, image);
            }
            if (this.accessibility) {
                this.options['src'] = this.accessibilityModeHandler();
            }
            /** @type {?} */
            var imageTag = this.cloudinary.imageTag(this.publicId, this.options);
            this.setElementAttributes(image, imageTag.attributes());
            if (this.options['responsive']) {
                this.cloudinary.responsive(image, this.options);
            }
        }
    };
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    CloudinaryImage.prototype.setElementAttributes = /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    function (element, attributesLiteral) {
        var _this = this;
        Object.keys(attributesLiteral).forEach(function (attrName) {
            /** @type {?} */
            var attr = attrName === 'src' && _this.loading === 'lazy' ? 'data-src' : attrName;
            _this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
        });
        // Enforcing placeholder style
        if (this.placeholderComponent) {
            this.setPlaceHolderStyle();
        }
    };
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     */
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    CloudinaryImage.prototype.placeholderHandler = /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    function (options, image) {
        /** @type {?} */
        var placeholderOptions = tslib_1.__assign({}, options);
        if (placeholderOptions['width']) {
            if (placeholderOptions['width'] === 'auto') {
                placeholderOptions['width'] = image.getAttribute('data-width');
            }
        }
        this.placeholderComponent.options = placeholderOptions;
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.accessibilityModeHandler = /**
     * @return {?}
     */
    function () {
        return this.cloudinary.url(this.publicId, tslib_1.__assign({ accessibility: this.accessibility }, this.options));
    };
    CloudinaryImage.decorators = [
        { type: Component, args: [{
                    selector: 'cl-image',
                    template: "<img (load)=\"hasLoaded()\">\n  <div *ngIf=\"placeholderComponent && shouldShowPlaceHolder\" [style.display]=\"shouldShowPlaceHolder ? 'inline' : 'none'\">\n    <ng-content></ng-content>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CloudinaryImage.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Cloudinary },
        { type: Renderer2 }
    ]; };
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
    return CloudinaryImage;
}());
export { CloudinaryImage };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGVBQWUsRUFDZixTQUFTLEVBT1QsWUFBWSxFQUNaLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFPLHlCQUF5QixDQUFDO0FBRWpFO0lBNkJFLHlCQUFvQixFQUFjLEVBQVUsVUFBc0IsRUFBVSxRQUFtQjtRQUEzRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQckYsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEOztRQUNwRyxZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw4Q0FBOEM7UUFHN0csMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFFNkUsQ0FBQzs7OztJQUVuRyxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJ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ICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsb3VkaW5hcnkgfSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nsb3VkaW5hcnktdHJhbnNmb3JtYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENsb3VkaW5hcnlQbGFjZUhvbGRlciB9IGZyb20gJy4vY2xvdWRpbmFyeS1wbGFjZWhvbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi9jbG91ZGluYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU0RLQW5hbHl0aWNzQ29uc3RhbnRzIH0gIGZyb20gJy4vU0RLQW5hbHl0aWNzQ29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2wtaW1hZ2UnLFxuICB0ZW1wbGF0ZTogYDxpbWcgKGxvYWQpPVwiaGFzTG9hZGVkKClcIj5cbiAgPGRpdiAqbmdJZj1cInBsYWNlaG9sZGVyQ29tcG9uZW50ICYmIHNob3VsZFNob3dQbGFjZUhvbGRlclwiIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFNob3dQbGFjZUhvbGRlciA/ICdpbmxpbmUnIDogJ25vbmUnXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeUltYWdlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgncHVibGljLWlkJykgcHVibGljSWQ6IHN0cmluZztcbiAgQElucHV0KCdjbGllbnQtaGludHMnKSBjbGllbnRIaW50cz86IGJvb2xlYW47XG4gIEBJbnB1dCgnbG9hZGluZycpIGxvYWRpbmc6IHN0cmluZztcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoPzogc3RyaW5nO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodD86IHN0cmluZztcblxuICBASW5wdXQoJ2FjY2Vzc2liaWxpdHknKSBhY2Nlc3NpYmlsaXR5Pzogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlKVxuICB0cmFuc2Zvcm1hdGlvbnM6IFF1ZXJ5TGlzdDxDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkKENsb3VkaW5hcnlQbGFjZUhvbGRlcikgcGxhY2Vob2xkZXJDb21wb25lbnQ6IENsb3VkaW5hcnlQbGFjZUhvbGRlcjtcblxuICBAT3V0cHV0KCkgb25Mb2FkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIENhbGxiYWNrIHdoZW4gYW4gaW1hZ2UgaXMgbG9hZGVkIHN1Y2Nlc3NmdWxseVxuICBAT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBDYWxsYmFjayB3aGVuIGFuIGltYWdlIGlzIGxvYWRlZCB3aXRoIGVycm9yXG5cbiAgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHNob3VsZFNob3dQbGFjZUhvbGRlciA9IHRydWU7XG4gIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2xvdWRpbmFyeTogQ2xvdWRpbmFyeSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc0Jyb3dzZXIoKSkge1xuICAgICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlXG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgICAgfSk7XG4gICAgICAvLyBPYnNlcnZlIGNoYW5nZXMgdG8gYXR0cmlidXRlcyBvciBjaGlsZCB0cmFuc2Zvcm1hdGlvbnMgdG8gcmUtcmVuZGVyIHRoZSBpbWFnZVxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfTtcblxuICAgICAgLy8gcGFzcyBpbiB0aGUgdGFyZ2V0IG5vZGUsIGFzIHdlbGwgYXMgdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIExpc3RlbiB0byBjaGFuZ2VzIG9uIHRoZSBkYXRhLWJvdW5kIHByb3BlcnR5ICdwdWJsaWNJZCcuXG4gICAgLy8gVXBkYXRlIGNvbXBvbmVudCB1bmxlc3MgdGhpcyBpcyB0aGUgZmlyc3QgdmFsdWUgYXNzaWduZWQuXG4gICAgaWYgKGNoYW5nZXMucHVibGljSWQgJiYgIWNoYW5nZXMucHVibGljSWQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCkge1xuICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubG9hZEltYWdlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggJiYgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudC5zZXRXaWR0aCh0aGlzLndpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGVpZ2h0ICYmIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQuc2V0UHVibGljSWQodGhpcy5wdWJsaWNJZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFwcGVuZHMgb3BhY2l0eSBhbmQgcG9zaXRpb24gdG8gY2wtaW1nLT5pbWcgd2hlbiBwbGFjZWhvbGRlciBpcyBkaXNwbGF5ZWRcbiAgICogcmVtb3ZlcyBzdHlsaW5nIGZyb20gY2wtaW1nLT5pbWcgd2hlbiBwbGFjZWhvbGRlciBkb2VzIG5vdCBkaXNwbGF5XG4gICAqL1xuICBzZXRQbGFjZUhvbGRlclN0eWxlKCkge1xuICAgIGlmICh0aGlzLnNob3VsZFNob3dQbGFjZUhvbGRlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sICdvcGFjaXR5JywgJzAnICk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3RlIHRoaXMgb25seSByZW1vdmVzIHN0eWxpbmcgZnJvbSBjbC1pbWctPmltZyBhbmQgbm90IGNsLWltZ1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCAnc3R5bGUnKTtcbiAgICB9XG4gIH1cblxuICBoYXNMb2FkZWQoKSB7XG4gICAgdGhpcy5zaG91bGRTaG93UGxhY2VIb2xkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGxvYWRJbWFnZSgpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwjdW5pdmVyc2FsLWdvdGNoYXNcbiAgICAvLyBGZXRjaCB0aGUgaW1hZ2Ugb25seSBmb3IgY2xpZW50IHNpZGUgcmVuZGVyaW5nIGJ5IHRoZSBicm93c2VyXG4gICAgaWYgKGlzQnJvd3NlcigpKSB7XG4gICAgICBpZiAoIXRoaXMucHVibGljSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdZb3UgbXVzdCBzZXQgdGhlIHB1YmxpYyBpZCBvZiB0aGUgaW1hZ2UgdG8gbG9hZCwgZS5nLiA8Y2wtaW1hZ2UgcHVibGljLWlkPXt7cGhvdG8ucHVibGljX2lkfX0uLi4+PC9jbC1pbWFnZT4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgaW1hZ2UgPSBuYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgLy8gQWRkIG9ubG9hZCBhbmQgb25lcnJvciBoYW5kbGVyc1xuICAgICAgaW1hZ2Uub25sb2FkID0gZSA9PiB7XG4gICAgICAgIHRoaXMub25Mb2FkLmVtaXQoZSk7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IGUgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IuZW1pdChlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsb3VkaW5hcnkudG9DbG91ZGluYXJ5QXR0cmlidXRlcyhcbiAgICAgICAgbmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLFxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLmNsaWVudEhpbnRzIHx8ICh0eXBlb2YgdGhpcy5jbGllbnRIaW50cyA9PT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5jbG91ZGluYXJ5LmNvbmZpZygpLmNsaWVudF9oaW50cykpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMub3B0aW9uc1snY2xhc3MnXTtcbiAgICAgICAgZGVsZXRlIHRoaXMub3B0aW9uc1snZGF0YS1zcmMnXTtcbiAgICAgICAgZGVsZXRlIHRoaXMub3B0aW9uc1sncmVzcG9uc2l2ZSddO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2xvdWRpbmFyeS5jb25maWcoKS51cmxBbmFseXRpY3MpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gey4uLlNES0FuYWx5dGljc0NvbnN0YW50cywgLi4udGhpcy5vcHRpb25zfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckhhbmRsZXIodGhpcy5vcHRpb25zLCBpbWFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zWydzcmMnXSA9IHRoaXMuYWNjZXNzaWJpbGl0eU1vZGVIYW5kbGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGltYWdlVGFnID0gdGhpcy5jbG91ZGluYXJ5LmltYWdlVGFnKHRoaXMucHVibGljSWQsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLnNldEVsZW1lbnRBdHRyaWJ1dGVzKGltYWdlLCBpbWFnZVRhZy5hdHRyaWJ1dGVzKCkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9uc1sncmVzcG9uc2l2ZSddKSB7XG4gICAgICAgIHRoaXMuY2xvdWRpbmFyeS5yZXNwb25zaXZlKGltYWdlLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXNMaXRlcmFsKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc0xpdGVyYWwpLmZvckVhY2goYXR0ck5hbWUgPT4ge1xuICAgICAgY29uc3QgYXR0ciA9IGF0dHJOYW1lID09PSAnc3JjJyAmJiB0aGlzLmxvYWRpbmcgPT09ICdsYXp5JyA/ICdkYXRhLXNyYycgOiBhdHRyTmFtZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHIsIGF0dHJpYnV0ZXNMaXRlcmFsW2F0dHJOYW1lXSk7XG4gICAgfSk7XG5cbiAgICAvLyBFbmZvcmNpbmcgcGxhY2Vob2xkZXIgc3R5bGVcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5zZXRQbGFjZUhvbGRlclN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcGxhY2Vob2xkZXIgb3B0aW9uc1xuICAgKiBJbiBjYXNlIG9mIHJlc3BvbnNpdmUgc2V0cyB3aWR0aCBmcm9tIHJlc2l6ZVxuICAgKiBJbiBjYXNlIHdpZHRoIG9yIGhlaWdodCBpcyBrbm93biB0YWtlcyAxMCUgb2Ygb3JpZ2luYWwgZGltZW5zaW9uXG4gICAqL1xuICBwbGFjZWhvbGRlckhhbmRsZXIob3B0aW9ucywgaW1hZ2UpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlck9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICBpZiAocGxhY2Vob2xkZXJPcHRpb25zWyd3aWR0aCddKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXJPcHRpb25zWyd3aWR0aCddID09PSAnYXV0bycpIHtcbiAgICAgICAgcGxhY2Vob2xkZXJPcHRpb25zWyd3aWR0aCddID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQub3B0aW9ucyA9IHBsYWNlaG9sZGVyT3B0aW9ucztcbiAgfVxuXG4gIGFjY2Vzc2liaWxpdHlNb2RlSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jbG91ZGluYXJ5LnVybCh0aGlzLnB1YmxpY0lkLCB7YWNjZXNzaWJpbGl0eTogdGhpcy5hY2Nlc3NpYmlsaXR5LCAuLi50aGlzLm9wdGlvbnN9KTtcbiAgfVxufVxuIl19