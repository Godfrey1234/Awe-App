/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, Input, ElementRef, Renderer2, } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
var CloudinaryPlaceHolder = /** @class */ (function () {
    function CloudinaryPlaceHolder(cloudinary, renderer, el) {
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.el = el;
        this.options = {};
    }
    /**
     * @param {?} width
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.setWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this.itemWidth = width;
    };
    /**
     * @param {?} height
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.setHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.itemHeight = height;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.setPublicId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.publicId = id;
    };
    /**
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imageTag = this.cloudinary.imageTag(this.publicId, this.options);
        this.setElementAttributes(this.el.nativeElement.children[0], imageTag.attributes());
        this.placeholderImg = this.getPlaceholderImage();
    };
    /**
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.getPlaceholderImage = /**
     * @return {?}
     */
    function () {
        if (this.type === 'predominant-color' && this.itemHeight && this.itemWidth) {
            return this.cloudinary.url(this.publicId, tslib_1.__assign({ placeholder: 'predominant-color-pixel' || true }, this.options));
        }
        else {
            return this.cloudinary.url(this.publicId, tslib_1.__assign({ placeholder: this.type || true }, this.options));
        }
    };
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    CloudinaryPlaceHolder.prototype.setElementAttributes = /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    function (element, attributesLiteral) {
        var _this = this;
        Object.keys(attributesLiteral).forEach(function (attrName) {
            if (attrName !== 'src' && attrName !== 'style') {
                _this.renderer.setAttribute(element, attrName, attributesLiteral[attrName]);
            }
        });
    };
    CloudinaryPlaceHolder.decorators = [
        { type: Component, args: [{
                    selector: 'cl-placeholder',
                    template: "<img [src]=\"this.placeholderImg\">"
                }] }
    ];
    /** @nocollapse */
    CloudinaryPlaceHolder.ctorParameters = function () { return [
        { type: Cloudinary },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    CloudinaryPlaceHolder.propDecorators = {
        type: [{ type: Input, args: ['type',] }],
        itemWidth: [{ type: HostBinding, args: ['style.width',] }],
        itemHeight: [{ type: HostBinding, args: ['style.height',] }],
        publicId: [{ type: HostBinding, args: ['attr.public-id',] }]
    };
    return CloudinaryPlaceHolder;
}());
export { CloudinaryPlaceHolder };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1wbGFjZWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xvdWRpbmFyeS9hbmd1bGFyLTUueC8iLCJzb3VyY2VzIjpbImxpYi9jbG91ZGluYXJ5LXBsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUdoRDtJQWNFLCtCQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsRUFBYztRQUEzRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIL0YsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQUc2RSxDQUFDOzs7OztJQUVuRyx3Q0FBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQseUNBQVM7Ozs7SUFBVCxVQUFVLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFEQUFxQjs7O0lBQXJCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxtREFBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxxQkFBRyxXQUFXLEVBQUUseUJBQXlCLElBQUksSUFBSSxJQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5RzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxxQkFBRyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsb0RBQW9COzs7OztJQUFwQixVQUFxQixPQUFPLEVBQUUsaUJBQWlCO1FBQS9DLGlCQU1DO1FBTEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDN0MsSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQzlDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUscUNBQW1DO2lCQUU5Qzs7OztnQkFQTyxVQUFVO2dCQUZoQixTQUFTO2dCQURULFVBQVU7Ozt1QkFZVCxLQUFLLFNBQUMsTUFBTTs0QkFDWixXQUFXLFNBQUMsYUFBYTs2QkFDekIsV0FBVyxTQUFDLGNBQWM7MkJBQzFCLFdBQVcsU0FBQyxnQkFBZ0I7O0lBd0MvQiw0QkFBQztDQUFBLEFBakRELElBaURDO1NBNUNZLHFCQUFxQjs7O0lBQ2hDLHFDQUE0Qjs7SUFDNUIsMENBQXNDOztJQUN0QywyQ0FBd0M7O0lBQ3hDLHlDQUF3Qzs7SUFFeEMsd0NBQXFCOztJQUNyQiwrQ0FBdUI7Ozs7O0lBRVgsMkNBQThCOzs7OztJQUFFLHlDQUEyQjs7Ozs7SUFBRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2xvdWRpbmFyeX0gZnJvbSAnLi9jbG91ZGluYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU0RLQW5hbHl0aWNzQ29uc3RhbnRzIH0gIGZyb20gJy4vU0RLQW5hbHl0aWNzQ29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2wtcGxhY2Vob2xkZXInLFxuICB0ZW1wbGF0ZTogYDxpbWcgW3NyY109XCJ0aGlzLnBsYWNlaG9sZGVySW1nXCI+YFxuICAsXG59KVxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlQbGFjZUhvbGRlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBpdGVtV2lkdGg7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaXRlbUhlaWdodDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnB1YmxpYy1pZCcpIHB1YmxpY0lkO1xuXG4gIG9wdGlvbnM6IG9iamVjdCA9IHt9O1xuICBwbGFjZWhvbGRlckltZzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xvdWRpbmFyeTogQ2xvdWRpbmFyeSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5pdGVtV2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLml0ZW1IZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBzZXRQdWJsaWNJZChpZCkge1xuICAgIHRoaXMucHVibGljSWQgPSBpZDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBjb25zdCBpbWFnZVRhZyA9IHRoaXMuY2xvdWRpbmFyeS5pbWFnZVRhZyh0aGlzLnB1YmxpY0lkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCBpbWFnZVRhZy5hdHRyaWJ1dGVzKCkpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJJbWcgPSB0aGlzLmdldFBsYWNlaG9sZGVySW1hZ2UoKTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVySW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ByZWRvbWluYW50LWNvbG9yJyAmJiB0aGlzLml0ZW1IZWlnaHQgJiYgdGhpcy5pdGVtV2lkdGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb3VkaW5hcnkudXJsKHRoaXMucHVibGljSWQsIHtwbGFjZWhvbGRlcjogJ3ByZWRvbWluYW50LWNvbG9yLXBpeGVsJyB8fCB0cnVlLCAuLi50aGlzLm9wdGlvbnN9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2xvdWRpbmFyeS51cmwodGhpcy5wdWJsaWNJZCwge3BsYWNlaG9sZGVyOiB0aGlzLnR5cGUgfHwgdHJ1ZSwgLi4udGhpcy5vcHRpb25zfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlc0xpdGVyYWwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzTGl0ZXJhbCkuZm9yRWFjaChhdHRyTmFtZSA9PiB7XG4gICAgICBpZiAoYXR0ck5hbWUgIT09ICdzcmMnICYmIGF0dHJOYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIGF0dHJOYW1lLCBhdHRyaWJ1dGVzTGl0ZXJhbFthdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=