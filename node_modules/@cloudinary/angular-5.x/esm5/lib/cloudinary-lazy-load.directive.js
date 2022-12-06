/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { isBrowser } from './cloudinary.service';
var LazyLoadDirective = /** @class */ (function () {
    function LazyLoadDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    LazyLoadDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isBrowser()) {
            if (!this.isNativeLazyLoadSupported() && this.isLazyLoadSupported()) {
                this.lazyLoad();
            }
            else {
                this.loadImage();
            }
        }
    };
    /**
     * @return {?}
     */
    LazyLoadDirective.prototype.loadImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this.el.nativeElement;
        /** @type {?} */
        var image = nativeElement.children[0];
        image.setAttribute('src', image.dataset.src);
    };
    /**
     * @return {?}
     */
    LazyLoadDirective.prototype.isLazyLoadSupported = /**
     * @return {?}
     */
    function () {
        return window && 'IntersectionObserver' in window;
    };
    /**
     * @return {?}
     */
    LazyLoadDirective.prototype.isNativeLazyLoadSupported = /**
     * @return {?}
     */
    function () {
        return 'loading' in HTMLImageElement.prototype; // check loading property is defined on image or iframe
    };
    /**
     * @return {?}
     */
    LazyLoadDirective.prototype.lazyLoad = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {
            rootMargin: "0px 0px -50% 0px",
        };
        /** @type {?} */
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    _this.loadImage();
                    observer.unobserve(entry.target);
                }
            }, options);
        });
        observer.observe(this.el.nativeElement);
    };
    LazyLoadDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'cl-image[loading=lazy]'
                },] }
    ];
    /** @nocollapse */
    LazyLoadDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return LazyLoadDirective;
}());
export { LazyLoadDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyLoadDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1sYXp5LWxvYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsb3VkaW5hcnkvYW5ndWxhci01LngvIiwic291cmNlcyI6WyJsaWIvY2xvdWRpbmFyeS1sYXp5LWxvYWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpEO0lBS0UsMkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7OztJQUV0QywyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQscUNBQVM7OztJQUFUOztZQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ3JDLEtBQUssR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCwrQ0FBbUI7OztJQUFuQjtRQUNFLE9BQU8sTUFBTSxJQUFJLHNCQUFzQixJQUFJLE1BQU0sQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQscURBQXlCOzs7SUFBekI7UUFDRSxPQUFPLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyx1REFBdUQ7SUFDekcsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUFBLGlCQWNDOztZQWJPLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxrQkFBa0I7U0FDL0I7O1lBQ0ssUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQ3pDLFVBQUMsT0FBTztZQUNOLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUNqQixJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7b0JBQ3hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBQ0osUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBTGlDLFVBQVU7O0lBaUQ1Qyx3QkFBQztDQUFBLEFBOUNELElBOENDO1NBM0NZLGlCQUFpQjs7Ozs7O0lBRWhCLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vY2xvdWRpbmFyeS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2wtaW1hZ2VbbG9hZGluZz1sYXp5XSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUxvYWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKCkpIHtcbiAgICAgIGlmICghdGhpcy5pc05hdGl2ZUxhenlMb2FkU3VwcG9ydGVkKCkgJiYgdGhpcy5pc0xhenlMb2FkU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5sYXp5TG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkSW1hZ2UoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpbWFnZSA9IG5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZS5kYXRhc2V0LnNyYyk7XG4gIH1cblxuICBpc0xhenlMb2FkU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB3aW5kb3cgJiYgJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3c7XG4gIH1cblxuICBpc05hdGl2ZUxhenlMb2FkU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiAnbG9hZGluZycgaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGU7IC8vIGNoZWNrIGxvYWRpbmcgcHJvcGVydHkgaXMgZGVmaW5lZCBvbiBpbWFnZSBvciBpZnJhbWVcbiAgfVxuXG4gIGxhenlMb2FkKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290TWFyZ2luOiBgMHB4IDBweCAtNTAlIDBweGAsIC8vIE1hcmdpbiBhcm91bmQgdGhlIHJvb3RcbiAgICB9O1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==