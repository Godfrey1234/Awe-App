/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList, PLATFORM_ID, Inject, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
// See also video reference - http://cloudinary.com/documentation/video_manipulation_and_delivery#video_transformations_reference
export class CloudinaryVideo {
    /**
     * @param {?} el
     * @param {?} cloudinary
     * @param {?} platformId
     */
    constructor(el, cloudinary, platformId) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.platformId = platformId;
        this.play = new EventEmitter();
        this.loadstart = new EventEmitter();
        this.playing = new EventEmitter();
        this.error = new EventEmitter();
        this.ended = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof MutationObserver !== 'undefined') {
            // Create an observer instance
            this.observer = new MutationObserver(() => {
                this.loadVideo(this.publicId);
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
            this.loadVideo(changes.publicId.currentValue);
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
        if (!this.publicId) {
            throw new Error('You must set the public id of the video to load, e.g. <cl-video public-id={{video.public_id}}...></cl-video>');
        }
        this.loadVideo(this.publicId);
    }
    /**
     * @param {?} publicId
     * @return {?}
     */
    loadVideo(publicId) {
        // https://github.com/angular/universal#universal-gotchas
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const video = nativeElement.children[0];
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const videoTag = this.cloudinary.videoTag(publicId, options);
            // Replace template with the custom video tag created by Cloudinary
            this.appendSourceElements(video, videoTag.content());
            // Add attributes
            this.setElementAttributes(video, videoTag.attributes());
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            element.setAttribute(attrName, attributesLiteral[attrName]);
        });
    }
    /**
     * @param {?} element
     * @param {?} html
     * @return {?}
     */
    appendSourceElements(element, html) {
        /** @type {?} */
        const fragment = document.createDocumentFragment();
        element.innerHTML = html;
        while (element.childNodes[0]) {
            fragment.appendChild(element.childNodes[0]);
        }
        element.appendChild(fragment);
    }
    /**
     * @return {?}
     */
    emitPlayEvent() {
        this.play.emit();
    }
    /**
     * @return {?}
     */
    emitLoadstartEvent() {
        this.loadstart.emit();
    }
    /**
     * @return {?}
     */
    emitPlayingEvent() {
        this.playing.emit();
    }
    /**
     * @return {?}
     */
    emitErrorEvent() {
        this.error.emit();
    }
    /**
     * @return {?}
     */
    emitEndedEvent() {
        this.ended.emit();
    }
}
CloudinaryVideo.decorators = [
    { type: Component, args: [{
                selector: 'cl-video',
                template: '<video (play)="emitPlayEvent()" (loadstart)="emitLoadstartEvent()" (playing)="emitPlayingEvent()" (error)="emitErrorEvent" (ended)="emitEndedEvent"></video>'
            }] }
];
/** @nocollapse */
CloudinaryVideo.ctorParameters = () => [
    { type: ElementRef },
    { type: Cloudinary },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
CloudinaryVideo.propDecorators = {
    publicId: [{ type: Input, args: ['public-id',] }],
    play: [{ type: Output }],
    loadstart: [{ type: Output }],
    playing: [{ type: Output }],
    error: [{ type: Output }],
    ended: [{ type: Output }],
    transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
};
if (false) {
    /** @type {?} */
    CloudinaryVideo.prototype.publicId;
    /** @type {?} */
    CloudinaryVideo.prototype.play;
    /** @type {?} */
    CloudinaryVideo.prototype.loadstart;
    /** @type {?} */
    CloudinaryVideo.prototype.playing;
    /** @type {?} */
    CloudinaryVideo.prototype.error;
    /** @type {?} */
    CloudinaryVideo.prototype.ended;
    /** @type {?} */
    CloudinaryVideo.prototype.transformations;
    /** @type {?} */
    CloudinaryVideo.prototype.observer;
    /**
     * @type {?}
     * @private
     */
    CloudinaryVideo.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CloudinaryVideo.prototype.cloudinary;
    /**
     * @type {?}
     * @private
     */
    CloudinaryVideo.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBTVQsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU0xRixpSUFBaUk7QUFDakksTUFBTSxPQUFPLGVBQWU7Ozs7OztJQWUxQixZQUFvQixFQUFjLEVBQVUsVUFBc0IsRUFBK0IsVUFBa0I7UUFBL0YsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQVh6RyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTzhELENBQUM7Ozs7SUFFdkgsUUFBUTtRQUNOLElBQUksT0FBTyxnQkFBZ0IsS0FBSyxXQUFXLEVBQUU7WUFDM0MsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hD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LGtCQUFrQjtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBaEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDhKQUE4SjthQUN6Szs7OztZQXJCQyxVQUFVO1lBZUgsVUFBVTtZQXVCNEYsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Ozt1QkFidEYsS0FBSyxTQUFDLFdBQVc7bUJBRWpCLE1BQU07d0JBQ04sTUFBTTtzQkFDTixNQUFNO29CQUNOLE1BQU07b0JBQ04sTUFBTTs4QkFFTixlQUFlLFNBQUMsaUNBQWlDOzs7O0lBUmxELG1DQUFxQzs7SUFFckMsK0JBQXVEOztJQUN2RCxvQ0FBNEQ7O0lBQzVELGtDQUEwRDs7SUFDMUQsZ0NBQXdEOztJQUN4RCxnQ0FBd0Q7O0lBRXhELDBDQUM4RDs7SUFFOUQsbUNBQTJCOzs7OztJQUVmLDZCQUFzQjs7Ozs7SUFBRSxxQ0FBOEI7Ozs7O0lBQUUscUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2xvdWRpbmFyeSB9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2xvdWRpbmFyeS10cmFuc2Zvcm1hdGlvbi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbC12aWRlbycsXG4gIHRlbXBsYXRlOiAnPHZpZGVvIChwbGF5KT1cImVtaXRQbGF5RXZlbnQoKVwiIChsb2Fkc3RhcnQpPVwiZW1pdExvYWRzdGFydEV2ZW50KClcIiAocGxheWluZyk9XCJlbWl0UGxheWluZ0V2ZW50KClcIiAoZXJyb3IpPVwiZW1pdEVycm9yRXZlbnRcIiAoZW5kZWQpPVwiZW1pdEVuZGVkRXZlbnRcIj48L3ZpZGVvPidcbn0pXG4vLyBTZWUgYWxzbyB2aWRlbyByZWZlcmVuY2UgLSBodHRwOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi92aWRlb19tYW5pcHVsYXRpb25fYW5kX2RlbGl2ZXJ5I3ZpZGVvX3RyYW5zZm9ybWF0aW9uc19yZWZlcmVuY2VcbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5VmlkZW9cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCdwdWJsaWMtaWQnKSBwdWJsaWNJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBwbGF5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvYWRzdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwbGF5aW5nOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVuZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkcmVuKENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZSlcbiAgdHJhbnNmb3JtYXRpb25zOiBRdWVyeUxpc3Q8Q2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlPjtcblxuICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNsb3VkaW5hcnk6IENsb3VkaW5hcnksIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZVxuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkVmlkZW8odGhpcy5wdWJsaWNJZCk7XG4gICAgICB9KTtcbiAgICAgIC8vIE9ic2VydmUgY2hhbmdlcyB0byBhdHRyaWJ1dGVzIG9yIGNoaWxkIHRyYW5zZm9ybWF0aW9ucyB0byByZS1yZW5kZXIgdGhlIGltYWdlXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9O1xuXG4gICAgICAvLyBwYXNzIGluIHRoZSB0YXJnZXQgbm9kZSwgYXMgd2VsbCBhcyB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gTGlzdGVuIHRvIGNoYW5nZXMgb24gdGhlIGRhdGEtYm91bmQgcHJvcGVydHkgJ3B1YmxpY0lkJy5cbiAgICAvLyBVcGRhdGUgY29tcG9uZW50IHVubGVzcyB0aGlzIGlzIHRoZSBmaXJzdCB2YWx1ZSBhc3NpZ25lZC5cbiAgICBpZiAoY2hhbmdlcy5wdWJsaWNJZCAmJiAhY2hhbmdlcy5wdWJsaWNJZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMubG9hZFZpZGVvKGNoYW5nZXMucHVibGljSWQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucHVibGljSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1lvdSBtdXN0IHNldCB0aGUgcHVibGljIGlkIG9mIHRoZSB2aWRlbyB0byBsb2FkLCBlLmcuIDxjbC12aWRlbyBwdWJsaWMtaWQ9e3t2aWRlby5wdWJsaWNfaWR9fS4uLj48L2NsLXZpZGVvPidcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubG9hZFZpZGVvKHRoaXMucHVibGljSWQpO1xuICB9XG5cbiAgbG9hZFZpZGVvKHB1YmxpY0lkOiBzdHJpbmcpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwjdW5pdmVyc2FsLWdvdGNoYXNcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHZpZGVvID0gbmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNsb3VkaW5hcnkudG9DbG91ZGluYXJ5QXR0cmlidXRlcyhcbiAgICAgICAgbmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLFxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0aW9uc1xuICAgICAgKTtcblxuICAgICAgY29uc3QgdmlkZW9UYWcgPSB0aGlzLmNsb3VkaW5hcnkudmlkZW9UYWcocHVibGljSWQsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBSZXBsYWNlIHRlbXBsYXRlIHdpdGggdGhlIGN1c3RvbSB2aWRlbyB0YWcgY3JlYXRlZCBieSBDbG91ZGluYXJ5XG4gICAgICB0aGlzLmFwcGVuZFNvdXJjZUVsZW1lbnRzKHZpZGVvLCB2aWRlb1RhZy5jb250ZW50KCkpO1xuICAgICAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgICAgIHRoaXMuc2V0RWxlbWVudEF0dHJpYnV0ZXModmlkZW8sIHZpZGVvVGFnLmF0dHJpYnV0ZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlc0xpdGVyYWwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzTGl0ZXJhbCkuZm9yRWFjaChhdHRyTmFtZSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc0xpdGVyYWxbYXR0ck5hbWVdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFNvdXJjZUVsZW1lbnRzKGVsZW1lbnQsIGh0bWwpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICB3aGlsZSAoZWxlbWVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgfVxuXG4gIGVtaXRQbGF5RXZlbnQoKSB7XG4gICAgdGhpcy5wbGF5LmVtaXQoKTtcbiAgfVxuXG4gIGVtaXRMb2Fkc3RhcnRFdmVudCgpIHtcbiAgICB0aGlzLmxvYWRzdGFydC5lbWl0KCk7XG4gIH1cblxuICBlbWl0UGxheWluZ0V2ZW50KCkge1xuICAgIHRoaXMucGxheWluZy5lbWl0KCk7XG4gIH1cblxuICBlbWl0RXJyb3JFdmVudCgpIHtcbiAgICB0aGlzLmVycm9yLmVtaXQoKTtcbiAgfVxuXG4gIGVtaXRFbmRlZEV2ZW50KCkge1xuICAgIHRoaXMuZW5kZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=