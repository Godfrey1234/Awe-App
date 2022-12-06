/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, QueryList, ContentChildren } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
var CloudinaryBackgroundImageDirective = /** @class */ (function () {
    function CloudinaryBackgroundImageDirective(renderer, el, cloudinary) {
        this.renderer = renderer;
        this.el = el;
        this.cloudinary = cloudinary;
        this.position = 'center';
    }
    /**
     * @return {?}
     */
    CloudinaryBackgroundImageDirective.prototype.isBrowser = /**
     * @return {?}
     */
    function () {
        return typeof window !== 'undefined';
    };
    /**
     * @return {?}
     */
    CloudinaryBackgroundImageDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser()) {
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            var imageUrl = this.cloudinary.url(this.clBackgroundImage, options);
            this.renderer.setStyle(nativeElement, 'background-image', "url('" + imageUrl + "')");
            this.renderer.setStyle(nativeElement, 'background-repeat', 'no-repeat');
            this.renderer.setStyle(nativeElement, 'background-position', this.position);
        }
    };
    CloudinaryBackgroundImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clBackgroundImage]'
                },] }
    ];
    /** @nocollapse */
    CloudinaryBackgroundImageDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: Cloudinary }
    ]; };
    CloudinaryBackgroundImageDirective.propDecorators = {
        clBackgroundImage: [{ type: Input }],
        position: [{ type: Input }],
        transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
    };
    return CloudinaryBackgroundImageDirective;
}());
export { CloudinaryBackgroundImageDirective };
if (false) {
    /** @type {?} */
    CloudinaryBackgroundImageDirective.prototype.clBackgroundImage;
    /** @type {?} */
    CloudinaryBackgroundImageDirective.prototype.position;
    /** @type {?} */
    CloudinaryBackgroundImageDirective.prototype.transformations;
    /**
     * @type {?}
     * @private
     */
    CloudinaryBackgroundImageDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CloudinaryBackgroundImageDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CloudinaryBackgroundImageDirective.prototype.cloudinary;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1iYWNrZ3JvdW5kLWltYWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbG91ZGluYXJ5L2FuZ3VsYXItNS54LyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktYmFja2dyb3VuZC1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRXhGO0lBV0ksNENBQW9CLFFBQW1CLEVBQVUsRUFBYyxFQUFVLFVBQXNCO1FBQTNFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUx0RixhQUFRLEdBQVcsUUFBUSxDQUFDO0lBTXJDLENBQUM7Ozs7SUFFRCxzREFBUzs7O0lBQVQ7UUFDRSxPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsNERBQWU7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUNkLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O2dCQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7O2dCQUNoRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsVUFBUSxRQUFRLE9BQUksQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO2lCQUNsQzs7OztnQkFOOEIsU0FBUztnQkFBckIsVUFBVTtnQkFDckIsVUFBVTs7O29DQVFiLEtBQUs7MkJBQ0wsS0FBSztrQ0FFTCxlQUFlLFNBQUMsaUNBQWlDOztJQW9CdEQseUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQXpCWSxrQ0FBa0M7OztJQUUzQywrREFBbUM7O0lBQ25DLHNEQUFxQzs7SUFFckMsNkRBQzhEOzs7OztJQUVsRCxzREFBMkI7Ozs7O0lBQUUsZ0RBQXNCOzs7OztJQUFFLHdEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nsb3VkaW5hcnl9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcbmltcG9ydCB7Q2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL2Nsb3VkaW5hcnktdHJhbnNmb3JtYXRpb24uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY2xCYWNrZ3JvdW5kSW1hZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5QmFja2dyb3VuZEltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBjbEJhY2tncm91bmRJbWFnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBvc2l0aW9uOiBzdHJpbmcgPSAnY2VudGVyJztcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oQ2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlKVxuICAgIHRyYW5zZm9ybWF0aW9uczogUXVlcnlMaXN0PENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2xvdWRpbmFyeTogQ2xvdWRpbmFyeSkge1xuICAgIH1cblxuICAgIGlzQnJvd3NlcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICBpZiAodGhpcy5pc0Jyb3dzZXIoKSkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jbG91ZGluYXJ5LnRvQ2xvdWRpbmFyeUF0dHJpYnV0ZXMobmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLCB0aGlzLnRyYW5zZm9ybWF0aW9ucyk7XG4gICAgICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5jbG91ZGluYXJ5LnVybCh0aGlzLmNsQmFja2dyb3VuZEltYWdlLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJyR7aW1hZ2VVcmx9JylgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1yZXBlYXQnLCAnbm8tcmVwZWF0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtcG9zaXRpb24nLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgfVxufVxuIl19