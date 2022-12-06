/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, QueryList, ContentChildren } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
import { isBrowser } from './cloudinary.service';
export class CloudinaryImageSourceDirective {
    /**
     * @param {?} el
     * @param {?} cloudinary
     */
    constructor(el, cloudinary) {
        this.el = el;
        this.cloudinary = cloudinary;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isBrowser()) {
            /** @type {?} */
            let attrName;
            /** @type {?} */
            let propertyValue;
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
            let isSvg = false;
            if (this.clHref &&
                toString.call(this.el.nativeElement['href'] === '[object SVGAnimatedString]')) {
                this.el.nativeElement.setAttribute('xlinkHref', 'xlink:href');
                isSvg = true;
            }
            if (!attrName || !propertyValue) {
                throw new Error('Directive value is missing for clHref/clSrc/clSrcset');
            }
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const attrValue = this.cloudinary.url(propertyValue, options);
            this.el.nativeElement.setAttribute(attrName, attrValue);
            /*
                     on IE, if "ngSrc" directive declaration is used and "src" attribute doesn't exist
                     then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
                     to set the property as well to achieve the desired effect.
            
                     Check for IE: http://stackoverflow.com/a/32139375/198095
                     if is IE then documentMode contains IE version
                     */
            /** @type {?} */
            const msie = this.el.nativeElement.ownerDocument.documentMode;
            if (msie && !isSvg) {
                // IE logic here
                this.el.nativeElement[attrName] = attrValue;
            }
        }
    }
    ;
}
CloudinaryImageSourceDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clHref], [clSrc], [clSrcset]'
            },] }
];
/** @nocollapse */
CloudinaryImageSourceDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Cloudinary }
];
CloudinaryImageSourceDirective.propDecorators = {
    clHref: [{ type: Input }],
    clSrc: [{ type: Input }],
    clSrcset: [{ type: Input }],
    transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1pbWFnZS1zb3VyY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsb3VkaW5hcnkvYW5ndWxhci01LngvIiwic291cmNlcyI6WyJsaWIvY2xvdWRpbmFyeS1pbWFnZS1zb3VyY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sOEJBQThCOzs7OztJQVN2QyxZQUFvQixFQUFjLEVBQVUsVUFBc0I7UUFBOUMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDbEUsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLFNBQVMsRUFBRSxFQUFFOztnQkFDWCxRQUFnQjs7Z0JBQ2hCLGFBQXFCO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixRQUFRLEdBQUcsTUFBTSxDQUFDO2dCQUNsQixhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUMvQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDakM7O2dCQUVHLEtBQUssR0FBRyxLQUFLO1lBRWpCLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyw0QkFBNEIsQ0FBQyxFQUFFO2dCQUMvRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUM5RCxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2FBQzNFOztrQkFFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztrQkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDOztrQkFFaEcsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7WUFDN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7OztrQkFVbEQsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQzdELElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQztJQUFBLENBQUM7OztZQTlETCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLCtCQUErQjthQUM1Qzs7OztZQVBrQixVQUFVO1lBQ3JCLFVBQVU7OztxQkFTYixLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFFTCxlQUFlLFNBQUMsaUNBQWlDOzs7O0lBSmxELGdEQUF3Qjs7SUFDeEIsK0NBQXVCOztJQUN2QixrREFBMEI7O0lBRTFCLHlEQUM4RDs7Ozs7SUFFbEQsNENBQXNCOzs7OztJQUFFLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG91ZGluYXJ5fSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQge0Nsb3VkaW5hcnlUcmFuc2Zvcm1hdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9jbG91ZGluYXJ5LXRyYW5zZm9ybWF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2NsSHJlZl0sIFtjbFNyY10sIFtjbFNyY3NldF0nXG59KVxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlJbWFnZVNvdXJjZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgY2xIcmVmOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xTcmM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbFNyY3NldDogc3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUpXG4gICAgdHJhbnNmb3JtYXRpb25zOiBRdWVyeUxpc3Q8Q2xvdWRpbmFyeVRyYW5zZm9ybWF0aW9uRGlyZWN0aXZlPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2xvdWRpbmFyeTogQ2xvdWRpbmFyeSkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgIGlmIChpc0Jyb3dzZXIoKSkge1xuICAgICAgICBsZXQgYXR0ck5hbWU6IHN0cmluZztcbiAgICAgICAgbGV0IHByb3BlcnR5VmFsdWU6IHN0cmluZztcbiAgICAgICAgaWYgKHRoaXMuY2xIcmVmKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9ICdocmVmJztcbiAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB0aGlzLmNsSHJlZjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsU3JjKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9ICdzcmMnO1xuICAgICAgICAgICAgcHJvcGVydHlWYWx1ZSA9IHRoaXMuY2xTcmM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbFNyY3NldCkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSAnc3Jjc2V0JztcbiAgICAgICAgICAgIHByb3BlcnR5VmFsdWUgPSB0aGlzLmNsU3Jjc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzU3ZnID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xIcmVmICYmXG4gICAgICAgICAgICB0b1N0cmluZy5jYWxsKHRoaXMuZWwubmF0aXZlRWxlbWVudFsnaHJlZiddID09PSAnW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ10nKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneGxpbmtIcmVmJywgJ3hsaW5rOmhyZWYnKTtcbiAgICAgICAgICAgIGlzU3ZnID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYXR0ck5hbWUgfHwgIXByb3BlcnR5VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGlyZWN0aXZlIHZhbHVlIGlzIG1pc3NpbmcgZm9yIGNsSHJlZi9jbFNyYy9jbFNyY3NldCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY2xvdWRpbmFyeS50b0Nsb3VkaW5hcnlBdHRyaWJ1dGVzKG5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcywgdGhpcy50cmFuc2Zvcm1hdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuY2xvdWRpbmFyeS51cmwocHJvcGVydHlWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgIG9uIElFLCBpZiBcIm5nU3JjXCIgZGlyZWN0aXZlIGRlY2xhcmF0aW9uIGlzIHVzZWQgYW5kIFwic3JjXCIgYXR0cmlidXRlIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgIHRoZW4gY2FsbGluZyBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ZvbycpIGRvZXNuJ3QgZG8gYW55dGhpbmcsIHNvIHdlIG5lZWRcbiAgICAgICAgIHRvIHNldCB0aGUgcHJvcGVydHkgYXMgd2VsbCB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cblxuICAgICAgICAgQ2hlY2sgZm9yIElFOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMjEzOTM3NS8xOTgwOTVcbiAgICAgICAgIGlmIGlzIElFIHRoZW4gZG9jdW1lbnRNb2RlIGNvbnRhaW5zIElFIHZlcnNpb25cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG1zaWUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgICAgIGlmIChtc2llICYmICFpc1N2Zykge1xuICAgICAgICAgICAgLy8gSUUgbG9naWMgaGVyZVxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG59XG4iXX0=