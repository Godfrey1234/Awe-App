/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef, Renderer2, } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
export class CloudinaryPlaceHolder {
    /**
     * @param {?} cloudinary
     * @param {?} renderer
     * @param {?} el
     */
    constructor(cloudinary, renderer, el) {
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.el = el;
        this.options = {};
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.itemWidth = width;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.itemHeight = height;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setPublicId(id) {
        this.publicId = id;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const imageTag = this.cloudinary.imageTag(this.publicId, this.options);
        this.setElementAttributes(this.el.nativeElement.children[0], imageTag.attributes());
        this.placeholderImg = this.getPlaceholderImage();
    }
    /**
     * @return {?}
     */
    getPlaceholderImage() {
        if (this.type === 'predominant-color' && this.itemHeight && this.itemWidth) {
            return this.cloudinary.url(this.publicId, Object.assign({ placeholder: 'predominant-color-pixel' || true }, this.options));
        }
        else {
            return this.cloudinary.url(this.publicId, Object.assign({ placeholder: this.type || true }, this.options));
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            if (attrName !== 'src' && attrName !== 'style') {
                this.renderer.setAttribute(element, attrName, attributesLiteral[attrName]);
            }
        });
    }
}
CloudinaryPlaceHolder.decorators = [
    { type: Component, args: [{
                selector: 'cl-placeholder',
                template: `<img [src]="this.placeholderImg">`
            }] }
];
/** @nocollapse */
CloudinaryPlaceHolder.ctorParameters = () => [
    { type: Cloudinary },
    { type: Renderer2 },
    { type: ElementRef }
];
CloudinaryPlaceHolder.propDecorators = {
    type: [{ type: Input, args: ['type',] }],
    itemWidth: [{ type: HostBinding, args: ['style.width',] }],
    itemHeight: [{ type: HostBinding, args: ['style.height',] }],
    publicId: [{ type: HostBinding, args: ['attr.public-id',] }]
};
if (false) {
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.type;
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.itemWidth;
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.itemHeight;
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.publicId;
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.options;
    /** @type {?} */
    CloudinaryPlaceHolder.prototype.placeholderImg;
    /**
     * @type {?}
     * @private
     */
    CloudinaryPlaceHolder.prototype.cloudinary;
    /**
     * @type {?}
     * @private
     */
    CloudinaryPlaceHolder.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CloudinaryPlaceHolder.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1wbGFjZWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LXBsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBUWhELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQVNoQyxZQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsRUFBYztRQUEzRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIL0YsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQUc2RSxDQUFDOzs7OztJQUVuRyxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFCQUFxQjs7Y0FDYixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBRyxXQUFXLEVBQUUseUJBQXlCLElBQUksSUFBSSxJQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5RzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxrQkFBRyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBTyxFQUFFLGlCQUFpQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hELElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLG1DQUFtQzthQUU5Qzs7OztZQVBPLFVBQVU7WUFGaEIsU0FBUztZQURULFVBQVU7OzttQkFZVCxLQUFLLFNBQUMsTUFBTTt3QkFDWixXQUFXLFNBQUMsYUFBYTt5QkFDekIsV0FBVyxTQUFDLGNBQWM7dUJBQzFCLFdBQVcsU0FBQyxnQkFBZ0I7Ozs7SUFIN0IscUNBQTRCOztJQUM1QiwwQ0FBc0M7O0lBQ3RDLDJDQUF3Qzs7SUFDeEMseUNBQXdDOztJQUV4Qyx3Q0FBcUI7O0lBQ3JCLCtDQUF1Qjs7Ozs7SUFFWCwyQ0FBOEI7Ozs7O0lBQUUseUNBQTJCOzs7OztJQUFFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG91ZGluYXJ5fSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTREtBbmFseXRpY3NDb25zdGFudHMgfSAgZnJvbSAnLi9TREtBbmFseXRpY3NDb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbC1wbGFjZWhvbGRlcicsXG4gIHRlbXBsYXRlOiBgPGltZyBbc3JjXT1cInRoaXMucGxhY2Vob2xkZXJJbWdcIj5gXG4gICxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeVBsYWNlSG9sZGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGl0ZW1XaWR0aDtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBpdGVtSGVpZ2h0O1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucHVibGljLWlkJykgcHVibGljSWQ7XG5cbiAgb3B0aW9uczogb2JqZWN0ID0ge307XG4gIHBsYWNlaG9sZGVySW1nOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbG91ZGluYXJ5OiBDbG91ZGluYXJ5LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLml0ZW1XaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuaXRlbUhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHNldFB1YmxpY0lkKGlkKSB7XG4gICAgdGhpcy5wdWJsaWNJZCA9IGlkO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGNvbnN0IGltYWdlVGFnID0gdGhpcy5jbG91ZGluYXJ5LmltYWdlVGFnKHRoaXMucHVibGljSWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sIGltYWdlVGFnLmF0dHJpYnV0ZXMoKSk7XG4gICAgdGhpcy5wbGFjZWhvbGRlckltZyA9IHRoaXMuZ2V0UGxhY2Vob2xkZXJJbWFnZSgpO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXJJbWFnZSgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAncHJlZG9taW5hbnQtY29sb3InICYmIHRoaXMuaXRlbUhlaWdodCAmJiB0aGlzLml0ZW1XaWR0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvdWRpbmFyeS51cmwodGhpcy5wdWJsaWNJZCwge3BsYWNlaG9sZGVyOiAncHJlZG9taW5hbnQtY29sb3ItcGl4ZWwnIHx8IHRydWUsIC4uLnRoaXMub3B0aW9uc30pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jbG91ZGluYXJ5LnVybCh0aGlzLnB1YmxpY0lkLCB7cGxhY2Vob2xkZXI6IHRoaXMudHlwZSB8fCB0cnVlLCAuLi50aGlzLm9wdGlvbnN9KTtcbiAgICB9XG4gIH1cblxuICBzZXRFbGVtZW50QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzTGl0ZXJhbCkge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXNMaXRlcmFsKS5mb3JFYWNoKGF0dHJOYW1lID0+IHtcbiAgICAgIGlmIChhdHRyTmFtZSAhPT0gJ3NyYycgJiYgYXR0ck5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudCwgYXR0ck5hbWUsIGF0dHJpYnV0ZXNMaXRlcmFsW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==