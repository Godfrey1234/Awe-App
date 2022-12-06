/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { isBrowser } from './cloudinary.service';
export class LazyLoadDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isBrowser()) {
            if (!this.isNativeLazyLoadSupported() && this.isLazyLoadSupported()) {
                this.lazyLoad();
            }
            else {
                this.loadImage();
            }
        }
    }
    /**
     * @return {?}
     */
    loadImage() {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        /** @type {?} */
        const image = nativeElement.children[0];
        image.setAttribute('src', image.dataset.src);
    }
    /**
     * @return {?}
     */
    isLazyLoadSupported() {
        return window && 'IntersectionObserver' in window;
    }
    /**
     * @return {?}
     */
    isNativeLazyLoadSupported() {
        return 'loading' in HTMLImageElement.prototype; // check loading property is defined on image or iframe
    }
    /**
     * @return {?}
     */
    lazyLoad() {
        /** @type {?} */
        const options = {
            rootMargin: `0px 0px -50% 0px`,
        };
        /** @type {?} */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage();
                    observer.unobserve(entry.target);
                }
            }, options);
        });
        observer.observe(this.el.nativeElement);
    }
}
LazyLoadDirective.decorators = [
    { type: Directive, args: [{
                selector: 'cl-image[loading=lazy]'
            },] }
];
/** @nocollapse */
LazyLoadDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyLoadDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS1sYXp5LWxvYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsb3VkaW5hcnkvYW5ndWxhci01LngvIiwic291cmNlcyI6WyJsaWIvY2xvdWRpbmFyeS1sYXp5LWxvYWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS2pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDOzs7O0lBRXRDLGVBQWU7UUFDYixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO2dCQUNuRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUzs7Y0FDRCxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztjQUNyQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sTUFBTSxJQUFJLHNCQUFzQixJQUFJLE1BQU0sQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3ZCLE9BQU8sU0FBUyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLHVEQUF1RDtJQUN6RyxDQUFDOzs7O0lBRUQsUUFBUTs7Y0FDQSxPQUFPLEdBQUc7WUFDZCxVQUFVLEVBQUUsa0JBQWtCO1NBQy9COztjQUNLLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixDQUN6QyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO29CQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNsQztZQUNILENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNKLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUFMaUMsVUFBVTs7Ozs7OztJQVE5QiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2Nsb3VkaW5hcnkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2NsLWltYWdlW2xvYWRpbmc9bGF6eV0nXG59KVxuZXhwb3J0IGNsYXNzIExhenlMb2FkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzQnJvd3NlcigpKSB7XG4gICAgICBpZiAoIXRoaXMuaXNOYXRpdmVMYXp5TG9hZFN1cHBvcnRlZCgpICYmIHRoaXMuaXNMYXp5TG9hZFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMubGF6eUxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZEltYWdlKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW1hZ2UgPSBuYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2UuZGF0YXNldC5zcmMpO1xuICB9XG5cbiAgaXNMYXp5TG9hZFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gd2luZG93ICYmICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93O1xuICB9XG5cbiAgaXNOYXRpdmVMYXp5TG9hZFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ2xvYWRpbmcnIGluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlOyAvLyBjaGVjayBsb2FkaW5nIHByb3BlcnR5IGlzIGRlZmluZWQgb24gaW1hZ2Ugb3IgaWZyYW1lXG4gIH1cblxuICBsYXp5TG9hZCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdE1hcmdpbjogYDBweCAwcHggLTUwJSAwcHhgLCAvLyBNYXJnaW4gYXJvdW5kIHRoZSByb290XG4gICAgfTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=