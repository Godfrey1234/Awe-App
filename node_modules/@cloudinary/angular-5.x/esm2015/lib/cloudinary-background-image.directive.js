/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input, QueryList, ContentChildren } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
export class CloudinaryBackgroundImageDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} cloudinary
     */
    constructor(renderer, el, cloudinary) {
        this.renderer = renderer;
        this.el = el;
        this.cloudinary = cloudinary;
        this.position = 'center';
    }
    /**
     * @return {?}
     */
    isBrowser() {
        return typeof window !== 'undefined';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser()) {
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const imageUrl = this.cloudinary.url(this.clBackgroundImage, options);
            this.renderer.setStyle(nativeElement, 'background-image', `url('${imageUrl}')`);
            this.renderer.setStyle(nativeElement, 'background-repeat', 'no-repeat');
            this.renderer.setStyle(nativeElement, 'background-position', this.position);
        }
    }
}
CloudinaryBackgroundImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clBackgroundImage]'
            },] }
];
/** @nocollapse */
CloudinaryBackgroundImageDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: Cloudinary }
];
CloudinaryBackgroundImageDirective.propDecorators = {
    clBackgroundImage: [{ type: Input }],
    position: [{ type: Input }],
    transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1iYWNrZ3JvdW5kLWltYWdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbG91ZGluYXJ5L2FuZ3VsYXItNS54LyIsInNvdXJjZXMiOlsibGliL2Nsb3VkaW5hcnktYmFja2dyb3VuZC1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBaUIsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBS3hGLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7OztJQVEzQyxZQUFvQixRQUFtQixFQUFVLEVBQWMsRUFBVSxVQUFzQjtRQUEzRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMdEYsYUFBUSxHQUFXLFFBQVEsQ0FBQztJQU1yQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7O2tCQUNkLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O2tCQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7O2tCQUNoRyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7O1lBTjhCLFNBQVM7WUFBckIsVUFBVTtZQUNyQixVQUFVOzs7Z0NBUWIsS0FBSzt1QkFDTCxLQUFLOzhCQUVMLGVBQWUsU0FBQyxpQ0FBaUM7Ozs7SUFIbEQsK0RBQW1DOztJQUNuQyxzREFBcUM7O0lBRXJDLDZEQUM4RDs7Ozs7SUFFbEQsc0RBQTJCOzs7OztJQUFFLGdEQUFzQjs7Ozs7SUFBRSx3REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG91ZGluYXJ5fSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQge0Nsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9jbG91ZGluYXJ5LXRyYW5zZm9ybWF0aW9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NsQmFja2dyb3VuZEltYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeUJhY2tncm91bmRJbWFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgY2xCYWNrZ3JvdW5kSW1hZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nID0gJ2NlbnRlcic7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZSlcbiAgICB0cmFuc2Zvcm1hdGlvbnM6IFF1ZXJ5TGlzdDxDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmU+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNsb3VkaW5hcnk6IENsb3VkaW5hcnkpIHtcbiAgICB9XG5cbiAgICBpc0Jyb3dzZXIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKCkpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2xvdWRpbmFyeS50b0Nsb3VkaW5hcnlBdHRyaWJ1dGVzKG5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcywgdGhpcy50cmFuc2Zvcm1hdGlvbnMpO1xuICAgICAgICBjb25zdCBpbWFnZVVybCA9IHRoaXMuY2xvdWRpbmFyeS51cmwodGhpcy5jbEJhY2tncm91bmRJbWFnZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCcke2ltYWdlVXJsfScpYCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtcmVwZWF0JywgJ25vLXJlcGVhdCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgdGhpcy5wb3NpdGlvbik7XG4gICAgICB9XG4gIH1cbn1cbiJdfQ==