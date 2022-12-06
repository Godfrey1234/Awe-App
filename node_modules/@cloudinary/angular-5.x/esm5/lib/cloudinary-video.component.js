/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ContentChildren, QueryList, PLATFORM_ID, Inject, EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
var CloudinaryVideo = /** @class */ (function () {
    function CloudinaryVideo(el, cloudinary, platformId) {
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
    CloudinaryVideo.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof MutationObserver !== 'undefined') {
            // Create an observer instance
            this.observer = new MutationObserver(function () {
                _this.loadVideo(_this.publicId);
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
    CloudinaryVideo.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadVideo(changes.publicId.currentValue);
        }
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.ngOnDestroy = /**
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
    CloudinaryVideo.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.publicId) {
            throw new Error('You must set the public id of the video to load, e.g. <cl-video public-id={{video.public_id}}...></cl-video>');
        }
        this.loadVideo(this.publicId);
    };
    /**
     * @param {?} publicId
     * @return {?}
     */
    CloudinaryVideo.prototype.loadVideo = /**
     * @param {?} publicId
     * @return {?}
     */
    function (publicId) {
        // https://github.com/angular/universal#universal-gotchas
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var video = nativeElement.children[0];
            /** @type {?} */
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            var videoTag = this.cloudinary.videoTag(publicId, options);
            // Replace template with the custom video tag created by Cloudinary
            this.appendSourceElements(video, videoTag.content());
            // Add attributes
            this.setElementAttributes(video, videoTag.attributes());
        }
    };
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    CloudinaryVideo.prototype.setElementAttributes = /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    function (element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(function (attrName) {
            element.setAttribute(attrName, attributesLiteral[attrName]);
        });
    };
    /**
     * @param {?} element
     * @param {?} html
     * @return {?}
     */
    CloudinaryVideo.prototype.appendSourceElements = /**
     * @param {?} element
     * @param {?} html
     * @return {?}
     */
    function (element, html) {
        /** @type {?} */
        var fragment = document.createDocumentFragment();
        element.innerHTML = html;
        while (element.childNodes[0]) {
            fragment.appendChild(element.childNodes[0]);
        }
        element.appendChild(fragment);
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.emitPlayEvent = /**
     * @return {?}
     */
    function () {
        this.play.emit();
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.emitLoadstartEvent = /**
     * @return {?}
     */
    function () {
        this.loadstart.emit();
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.emitPlayingEvent = /**
     * @return {?}
     */
    function () {
        this.playing.emit();
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.emitErrorEvent = /**
     * @return {?}
     */
    function () {
        this.error.emit();
    };
    /**
     * @return {?}
     */
    CloudinaryVideo.prototype.emitEndedEvent = /**
     * @return {?}
     */
    function () {
        this.ended.emit();
    };
    CloudinaryVideo.decorators = [
        { type: Component, args: [{
                    selector: 'cl-video',
                    template: '<video (play)="emitPlayEvent()" (loadstart)="emitLoadstartEvent()" (playing)="emitPlayingEvent()" (error)="emitErrorEvent" (ended)="emitEndedEvent"></video>'
                }] }
    ];
    /** @nocollapse */
    CloudinaryVideo.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Cloudinary },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    CloudinaryVideo.propDecorators = {
        publicId: [{ type: Input, args: ['public-id',] }],
        play: [{ type: Output }],
        loadstart: [{ type: Output }],
        playing: [{ type: Output }],
        error: [{ type: Output }],
        ended: [{ type: Output }],
        transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
    };
    return CloudinaryVideo;
}());
export { CloudinaryVideo };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBTVQsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRjtJQW9CRSx5QkFBb0IsRUFBYyxFQUFVLFVBQXNCLEVBQStCLFVBQWtCO1FBQS9GLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQStCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFYekcsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU84RCxDQUFDOzs7O0lBRXZILGtDQUFROzs7SUFBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxPQUFPLGdCQUFnQixLQUFLLFdBQVcsRUFBRTtZQUMzQyw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDO2dCQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtB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QUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsMENBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQWhIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSw4SkFBOEo7aUJBQ3pLOzs7O2dCQXJCQyxVQUFVO2dCQWVILFVBQVU7Z0JBdUI0RixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7OzJCQWJ0RixLQUFLLFNBQUMsV0FBVzt1QkFFakIsTUFBTTs0QkFDTixNQUFNOzBCQUNOLE1BQU07d0JBQ04sTUFBTTt3QkFDTixNQUFNO2tDQUVOLGVBQWUsU0FBQyxpQ0FBaUM7O0lBa0dwRCxzQkFBQztDQUFBLEFBakhELElBaUhDO1NBNUdZLGVBQWU7OztJQUUxQixtQ0FBcUM7O0lBRXJDLCtCQUF1RDs7SUFDdkQsb0NBQTREOztJQUM1RCxrQ0FBMEQ7O0lBQzFELGdDQUF3RDs7SUFDeEQsZ0NBQXdEOztJQUV4RCwwQ0FDOEQ7O0lBRTlELG1DQUEyQjs7Ozs7SUFFZiw2QkFBc0I7Ozs7O0lBQUUscUNBQThCOzs7OztJQUFFLHFDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENsb3VkaW5hcnkgfSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nsb3VkaW5hcnktdHJhbnNmb3JtYXRpb24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2wtdmlkZW8nLFxuICB0ZW1wbGF0ZTogJzx2aWRlbyAocGxheSk9XCJlbWl0UGxheUV2ZW50KClcIiAobG9hZHN0YXJ0KT1cImVtaXRMb2Fkc3RhcnRFdmVudCgpXCIgKHBsYXlpbmcpPVwiZW1pdFBsYXlpbmdFdmVudCgpXCIgKGVycm9yKT1cImVtaXRFcnJvckV2ZW50XCIgKGVuZGVkKT1cImVtaXRFbmRlZEV2ZW50XCI+PC92aWRlbz4nXG59KVxuLy8gU2VlIGFsc28gdmlkZW8gcmVmZXJlbmNlIC0gaHR0cDovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vdmlkZW9fbWFuaXB1bGF0aW9uX2FuZF9kZWxpdmVyeSN2aWRlb190cmFuc2Zvcm1hdGlvbnNfcmVmZXJlbmNlXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeVZpZGVvXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgncHVibGljLWlkJykgcHVibGljSWQ6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcGxheTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2Fkc3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcGxheWluZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbmRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUpXG4gIHRyYW5zZm9ybWF0aW9uczogUXVlcnlMaXN0PENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZT47XG5cbiAgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjbG91ZGluYXJ5OiBDbG91ZGluYXJ5LCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2VcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZFZpZGVvKHRoaXMucHVibGljSWQpO1xuICAgICAgfSk7XG4gICAgICAvLyBPYnNlcnZlIGNoYW5nZXMgdG8gYXR0cmlidXRlcyBvciBjaGlsZCB0cmFuc2Zvcm1hdGlvbnMgdG8gcmUtcmVuZGVyIHRoZSBpbWFnZVxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfTtcblxuICAgICAgLy8gcGFzcyBpbiB0aGUgdGFyZ2V0IG5vZGUsIGFzIHdlbGwgYXMgdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIExpc3RlbiB0byBjaGFuZ2VzIG9uIHRoZSBkYXRhLWJvdW5kIHByb3BlcnR5ICdwdWJsaWNJZCcuXG4gICAgLy8gVXBkYXRlIGNvbXBvbmVudCB1bmxlc3MgdGhpcyBpcyB0aGUgZmlyc3QgdmFsdWUgYXNzaWduZWQuXG4gICAgaWYgKGNoYW5nZXMucHVibGljSWQgJiYgIWNoYW5nZXMucHVibGljSWQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmxvYWRWaWRlbyhjaGFuZ2VzLnB1YmxpY0lkLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KSB7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLnB1YmxpY0lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3UgbXVzdCBzZXQgdGhlIHB1YmxpYyBpZCBvZiB0aGUgdmlkZW8gdG8gbG9hZCwgZS5nLiA8Y2wtdmlkZW8gcHVibGljLWlkPXt7dmlkZW8ucHVibGljX2lkfX0uLi4+PC9jbC12aWRlbz4nXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmxvYWRWaWRlbyh0aGlzLnB1YmxpY0lkKTtcbiAgfVxuXG4gIGxvYWRWaWRlbyhwdWJsaWNJZDogc3RyaW5nKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsI3VuaXZlcnNhbC1nb3RjaGFzXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCB2aWRlbyA9IG5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jbG91ZGluYXJ5LnRvQ2xvdWRpbmFyeUF0dHJpYnV0ZXMoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcyxcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHZpZGVvVGFnID0gdGhpcy5jbG91ZGluYXJ5LnZpZGVvVGFnKHB1YmxpY0lkLCBvcHRpb25zKTtcblxuICAgICAgLy8gUmVwbGFjZSB0ZW1wbGF0ZSB3aXRoIHRoZSBjdXN0b20gdmlkZW8gdGFnIGNyZWF0ZWQgYnkgQ2xvdWRpbmFyeVxuICAgICAgdGhpcy5hcHBlbmRTb3VyY2VFbGVtZW50cyh2aWRlbywgdmlkZW9UYWcuY29udGVudCgpKTtcbiAgICAgIC8vIEFkZCBhdHRyaWJ1dGVzXG4gICAgICB0aGlzLnNldEVsZW1lbnRBdHRyaWJ1dGVzKHZpZGVvLCB2aWRlb1RhZy5hdHRyaWJ1dGVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVsZW1lbnRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXNMaXRlcmFsKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlc0xpdGVyYWwpLmZvckVhY2goYXR0ck5hbWUgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNMaXRlcmFsW2F0dHJOYW1lXSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRTb3VyY2VFbGVtZW50cyhlbGVtZW50LCBodG1sKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgd2hpbGUgKGVsZW1lbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH1cblxuICBlbWl0UGxheUV2ZW50KCkge1xuICAgIHRoaXMucGxheS5lbWl0KCk7XG4gIH1cblxuICBlbWl0TG9hZHN0YXJ0RXZlbnQoKSB7XG4gICAgdGhpcy5sb2Fkc3RhcnQuZW1pdCgpO1xuICB9XG5cbiAgZW1pdFBsYXlpbmdFdmVudCgpIHtcbiAgICB0aGlzLnBsYXlpbmcuZW1pdCgpO1xuICB9XG5cbiAgZW1pdEVycm9yRXZlbnQoKSB7XG4gICAgdGhpcy5lcnJvci5lbWl0KCk7XG4gIH1cblxuICBlbWl0RW5kZWRFdmVudCgpIHtcbiAgICB0aGlzLmVuZGVkLmVtaXQoKTtcbiAgfVxufVxuIl19