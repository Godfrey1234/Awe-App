/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, QueryList, ContentChildren } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
import { isBrowser } from './cloudinary.service';
var CloudinaryImageSourceDirective = /** @class */ (function () {
    function CloudinaryImageSourceDirective(el, cloudinary) {
        this.el = el;
        this.cloudinary = cloudinary;
    }
    /**
     * @return {?}
     */
    CloudinaryImageSourceDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isBrowser()) {
            /** @type {?} */
            var attrName = void 0;
            /** @type {?} */
            var propertyValue = void 0;
            if (this.clHref) {
                attrName = 'href';
                propertyValue = this.clHref;
            }
            else if (this.clSrc) {
                attrName = 'src';
                propertyValue = this.clSrc;
            }
            else if (this.clSrcset) {
                attrName = 'srcset';
                propertyValue = this.clSrcset;
            }
            /** @type {?} */
            var isSvg = false;
            if (this.clHref &&
                toString.call(this.el.nativeElement['href'] === '[object SVGAnimatedString]')) {
                this.el.nativeElement.setAttribute('xlinkHref', 'xlink:href');
                isSvg = true;
            }
            if (!attrName || !propertyValue) {
                throw new Error('Directive value is missing for clHref/clSrc/clSrcset');
            }
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            var attrValue = this.cloudinary.url(propertyValue, options);
            this.el.nativeElement.setAttribute(attrName, attrValue);
            /*
                     on IE, if "ngSrc" directive declaration is used and "src" attribute doesn't exist
                     then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
                     to set the property as well to achieve the desired effect.
            
                     Check for IE: http://stackoverflow.com/a/32139375/198095
                     if is IE then documentMode contains IE version
                     */
            /** @type {?} */
            var msie = this.el.nativeElement.ownerDocument.documentMode;
            if (msie && !isSvg) {
                // IE logic here
                this.el.nativeElement[attrName] = attrValue;
            }
        }
    };
    ;
    CloudinaryImageSourceDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clHref], [clSrc], [clSrcset]'
                },] }
    ];
    /** @nocollapse */
    CloudinaryImageSourceDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Cloudinary }
    ]; };
    CloudinaryImageSourceDirective.propDecorators = {
        clHref: [{ type: Input }],
        clSrc: [{ type: Input }],
        clSrcset: [{ type: Input }],
        transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
    };
    return CloudinaryImageSourceDirective;
}());
export { CloudinaryImageSourceDirective };
if (false) {
    /** @type {?} */
    CloudinaryImageSourceDirective.prototype.clHref;
    /** @type {?} */
    CloudinaryImageSourceDirective.prototype.clSrc;
    /** @type {?} */
    CloudinaryImageSourceDirective.prototype.clSrcset;
    /** @type {?} */
    CloudinaryImageSourceDirective.prototype.transformations;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImageSourceDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImageSourceDirective.prototype.cloudinary;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1pbWFnZS1zb3VyY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsb3VkaW5hcnkvYW5ndWxhci01LngvIiwic291cmNlcyI6WyJsaWIvY2xvdWRpbmFyeS1pbWFnZS1zb3VyY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRDtJQVlJLHdDQUFvQixFQUFjLEVBQVUsVUFBc0I7UUFBOUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDbEUsQ0FBQzs7OztJQUVELHdEQUFlOzs7SUFBZjtRQUNFLElBQUksU0FBUyxFQUFFLEVBQUU7O2dCQUNYLFFBQVEsU0FBUTs7Z0JBQ2hCLGFBQWEsU0FBUTtZQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUM5QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3BCLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2pDOztnQkFFRyxLQUFLLEdBQUcsS0FBSztZQUVqQixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssNEJBQTRCLENBQUMsRUFBRTtnQkFDL0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUVELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQzthQUMzRTs7Z0JBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7Z0JBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzs7Z0JBRWhHLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1lBQzdELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Z0JBVWxELElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUM3RCxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDaEIsZ0JBQWdCO2dCQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFBQSxDQUFDOztnQkE5REwsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwrQkFBK0I7aUJBQzVDOzs7O2dCQVBrQixVQUFVO2dCQUNyQixVQUFVOzs7eUJBU2IsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7a0NBRUwsZUFBZSxTQUFDLGlDQUFpQzs7SUFzRHRELHFDQUFDO0NBQUEsQUEvREQsSUErREM7U0E1RFksOEJBQThCOzs7SUFFdkMsZ0RBQXdCOztJQUN4QiwrQ0FBdUI7O0lBQ3ZCLGtEQUEwQjs7SUFFMUIseURBQzhEOzs7OztJQUVsRCw0Q0FBc0I7Ozs7O0lBQUUsb0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nsb3VkaW5hcnl9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcbmltcG9ydCB7Q2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL2Nsb3VkaW5hcnktdHJhbnNmb3JtYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY2xIcmVmXSwgW2NsU3JjXSwgW2NsU3Jjc2V0XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeUltYWdlU291cmNlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBjbEhyZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbFNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsU3Jjc2V0OiBzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKENsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZSlcbiAgICB0cmFuc2Zvcm1hdGlvbnM6IFF1ZXJ5TGlzdDxDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmU+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjbG91ZGluYXJ5OiBDbG91ZGluYXJ5KSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgaWYgKGlzQnJvd3NlcigpKSB7XG4gICAgICAgIGxldCBhdHRyTmFtZTogc3RyaW5nO1xuICAgICAgICBsZXQgcHJvcGVydHlWYWx1ZTogc3RyaW5nO1xuICAgICAgICBpZiAodGhpcy5jbEhyZWYpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gJ2hyZWYnO1xuICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHRoaXMuY2xIcmVmO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xTcmMpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gJ3NyYyc7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gdGhpcy5jbFNyYztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsU3Jjc2V0KSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9ICdzcmNzZXQnO1xuICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHRoaXMuY2xTcmNzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNTdmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jbEhyZWYgJiZcbiAgICAgICAgICAgIHRvU3RyaW5nLmNhbGwodGhpcy5lbC5uYXRpdmVFbGVtZW50WydocmVmJ10gPT09ICdbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXScpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd4bGlua0hyZWYnLCAneGxpbms6aHJlZicpO1xuICAgICAgICAgICAgaXNTdmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhdHRyTmFtZSB8fCAhcHJvcGVydHlWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXJlY3RpdmUgdmFsdWUgaXMgbWlzc2luZyBmb3IgY2xIcmVmL2NsU3JjL2NsU3Jjc2V0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jbG91ZGluYXJ5LnRvQ2xvdWRpbmFyeUF0dHJpYnV0ZXMobmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLCB0aGlzLnRyYW5zZm9ybWF0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gdGhpcy5jbG91ZGluYXJ5LnVybChwcm9wZXJ0eVZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcblxuICAgICAgICAvKlxuICAgICAgICAgb24gSUUsIGlmIFwibmdTcmNcIiBkaXJlY3RpdmUgZGVjbGFyYXRpb24gaXMgdXNlZCBhbmQgXCJzcmNcIiBhdHRyaWJ1dGUgZG9lc24ndCBleGlzdFxuICAgICAgICAgdGhlbiBjYWxsaW5nIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnZm9vJykgZG9lc24ndCBkbyBhbnl0aGluZywgc28gd2UgbmVlZFxuICAgICAgICAgdG8gc2V0IHRoZSBwcm9wZXJ0eSBhcyB3ZWxsIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuXG4gICAgICAgICBDaGVjayBmb3IgSUU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMyMTM5Mzc1LzE5ODA5NVxuICAgICAgICAgaWYgaXMgSUUgdGhlbiBkb2N1bWVudE1vZGUgY29udGFpbnMgSUUgdmVyc2lvblxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbXNpZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICAgICAgaWYgKG1zaWUgJiYgIWlzU3ZnKSB7XG4gICAgICAgICAgICAvLyBJRSBsb2dpYyBoZXJlXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnRbYXR0ck5hbWVdID0gYXR0clZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbn1cbiJdfQ==