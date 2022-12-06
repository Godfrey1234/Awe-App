import { Directive, ElementRef, Component, Renderer2, Input, HostBinding, VERSION, EventEmitter, ContentChildren, ContentChild, Output, Inject, PLATFORM_ID, InjectionToken, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns true if the given string begins with a left curly brace and ends with a right curly brace, e.g.
 * "{asdas d}" will return true, "asdasd}" will return false.
 *
 * this function does not validate the correctness of the string content other than the first and last character
 * \@param str
 * \@return boolean
 * @type {?}
 */
const isJsonLikeString = function (str) {
    // [\s\S] allows the string to contain new lines
    return str && typeof str === 'string' && (str.trim().match(/^{[\s\S]*?}$/) !== null);
};
const ɵ0 = isJsonLikeString;
/** @type {?} */
const isArrayLikeString = function (str) {
    return str && typeof str === 'string' && (str.trim().match(/^\[[\s\S]*?]$/) !== null);
};
const ɵ1 = isArrayLikeString;
/** @type {?} */
const isNamedNodeMap = function (obj) {
    return obj && (obj.constructor.name === 'NamedNodeMap' || obj instanceof NamedNodeMap);
};
const ɵ2 = isNamedNodeMap;
/** @type {?} */
const namedNodeMapToObject = function (source) {
    /** @type {?} */
    let target = {};
    Object.keys(source).forEach(index => {
        /** @type {?} */
        const name = source[index].name;
        /** @type {?} */
        const value = source[index].value;
        target[name] = value;
    });
    return target;
};
const ɵ3 = namedNodeMapToObject;
/** @type {?} */
const transformKeyNames = function (obj) {
    /** @type {?} */
    let _obj = obj;
    if (isJsonLikeString(obj) || isArrayLikeString(obj)) {
        // Given attribute value is in the form of a JSON object -
        // Transforms the string into an object or array, as the Javascript API expects
        if (isArrayLikeString(obj)) {
            obj = obj.replace(/'/g, '"');
        }
        _obj = JSON.parse(obj);
    }
    else if (isNamedNodeMap(obj)) {
        _obj = namedNodeMapToObject(obj);
    }
    if (Array.isArray(_obj)) {
        // Transform all the array values (e.g. transformation array)
        _obj = _obj.map(currentValue => {
            return transformKeyNames(currentValue);
        });
    }
    else if (typeof _obj === 'object') {
        Object.keys(_obj).forEach(key => {
            // Replace the key name with the snake_case
            // Then strip cld prefix if it exists (with an optional dash or underscore)
            /** @type {?} */
            const kebabKey = key.replace(/-/g, '_').toLocaleLowerCase().replace(/^cld(-|_)?/, '');
            /** @type {?} */
            const kebabValue = transformKeyNames(_obj[key]);
            delete _obj[key];
            _obj[kebabKey] = kebabValue;
        });
    }
    return _obj;
};
const ɵ4 = transformKeyNames;
class Cloudinary {
    /**
     * @param {?} cloudinaryJsLib
     * @param {?} configuration
     */
    constructor(cloudinaryJsLib, configuration) {
        // Cloudinary JS already clones the given configuration so no need to clone it here too
        if (cloudinaryJsLib.CloudinaryJQuery) {
            this._cloudinaryInstance = new cloudinaryJsLib.CloudinaryJQuery(configuration);
        }
        else {
            this._cloudinaryInstance = new cloudinaryJsLib.Cloudinary(configuration);
        }
    }
    /**
     * @return {?}
     */
    get cloudinaryInstance() {
        return this._cloudinaryInstance;
    }
    /**
     * @return {?}
     */
    config() {
        return this._cloudinaryInstance.config();
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    updateConfig(configuration) {
        this._cloudinaryInstance.config(configuration);
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    url(...parameters) {
        return this._cloudinaryInstance.url(...parameters);
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    imageTag(...parameters) {
        return this._cloudinaryInstance.imageTag(...parameters);
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    videoTag(...parameters) {
        return this._cloudinaryInstance.videoTag(...parameters);
    }
    /**
     * @param {?} img
     * @param {?} options
     * @return {?}
     */
    responsive(img, options) {
        // Cloudinary underlying JS library will handle responsive behavior
        this._cloudinaryInstance.cloudinary_update(img, options);
        this._cloudinaryInstance.responsive(options, false);
    }
    /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param {?} attributes HTML element attributes
     * @param {?=} childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @return {?} An options object that can be consumed by Cloudinary JS API
     */
    toCloudinaryAttributes(attributes, childTransformations) {
        /** @type {?} */
        const options = transformKeyNames(attributes);
        // Add chained transformations
        if (childTransformations && childTransformations.length > 0) {
            options.transformation = [];
            // Support chained transformations
            childTransformations.forEach(transformation => {
                options.transformation.push(this.toCloudinaryAttributes(transformation.getAttributes()));
            });
        }
        // Add responsiveness
        if (options.responsive === '' || options.responsive === 'true' || options.responsive === true) {
            options.responsive = true;
        }
        return options;
    }
    ;
}
if (false) {
    /** @type {?} */
    Cloudinary.prototype._cloudinaryInstance;
    /* Skipping unhandled member: ;*/
}
/* Return a provider object that creates our configurable service */
/**
 * @param {?} cloudinaryJsLib
 * @param {?} configuration
 * @return {?}
 */
function provideCloudinary(cloudinaryJsLib, configuration) {
    return { provide: Cloudinary, useFactory: () => new Cloudinary(cloudinaryJsLib, configuration) };
}
;
/** @type {?} */
const isBrowser = function () {
    return typeof window !== 'undefined';
}
// For unit tests
;
const ɵ5 = isBrowser;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryTransformationDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    getAttributes() {
        return this.el.nativeElement.attributes;
    }
}
CloudinaryTransformationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'cl-transformation'
            },] }
];
/** @nocollapse */
CloudinaryTransformationDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloudinaryTransformationDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryPlaceHolder {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let APP_VERSION = '1.5.3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let SDKAnalyticsConstants = {
    sdkSemver: APP_VERSION,
    techVersion: VERSION.full,
    sdkCode: 'K',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryImage {
    /**
     * @param {?} el
     * @param {?} cloudinary
     * @param {?} renderer
     */
    constructor(el, cloudinary, renderer) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.onLoad = new EventEmitter(); // Callback when an image is loaded successfully
        // Callback when an image is loaded successfully
        this.onError = new EventEmitter(); // Callback when an image is loaded with error
        this.shouldShowPlaceHolder = true;
        this.options = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(() => {
                this.loadImage();
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
            this.loadImage();
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
        this.loadImage();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.width && this.placeholderComponent) {
            this.placeholderComponent.setWidth(this.width);
        }
        if (this.height && this.placeholderComponent) {
            this.placeholderComponent.setHeight(this.height);
        }
        if (this.placeholderComponent) {
            this.placeholderComponent.setPublicId(this.publicId);
        }
    }
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    setPlaceHolderStyle() {
        if (this.shouldShowPlaceHolder) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'absolute');
        }
        else {
            // note this only removes styling from cl-img->img and not cl-img
            this.renderer.removeAttribute(this.el.nativeElement.children[0], 'style');
        }
    }
    /**
     * @return {?}
     */
    hasLoaded() {
        this.shouldShowPlaceHolder = false;
    }
    /**
     * @return {?}
     */
    loadImage() {
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = e => {
                this.onLoad.emit(e);
            };
            image.onerror = e => {
                this.onError.emit(e);
            };
            this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            if (this.clientHints || (typeof this.clientHints === 'undefined' && this.cloudinary.config().client_hints)) {
                delete this.options['class'];
                delete this.options['data-src'];
                delete this.options['responsive'];
            }
            if (this.cloudinary.config().urlAnalytics) {
                this.options = Object.assign({}, SDKAnalyticsConstants, this.options);
            }
            if (this.placeholderComponent) {
                this.placeholderHandler(this.options, image);
            }
            if (this.accessibility) {
                this.options['src'] = this.accessibilityModeHandler();
            }
            /** @type {?} */
            const imageTag = this.cloudinary.imageTag(this.publicId, this.options);
            this.setElementAttributes(image, imageTag.attributes());
            if (this.options['responsive']) {
                this.cloudinary.responsive(image, this.options);
            }
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            /** @type {?} */
            const attr = attrName === 'src' && this.loading === 'lazy' ? 'data-src' : attrName;
            this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
        });
        // Enforcing placeholder style
        if (this.placeholderComponent) {
            this.setPlaceHolderStyle();
        }
    }
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    placeholderHandler(options, image) {
        /** @type {?} */
        const placeholderOptions = Object.assign({}, options);
        if (placeholderOptions['width']) {
            if (placeholderOptions['width'] === 'auto') {
                placeholderOptions['width'] = image.getAttribute('data-width');
            }
        }
        this.placeholderComponent.options = placeholderOptions;
    }
    /**
     * @return {?}
     */
    accessibilityModeHandler() {
        return this.cloudinary.url(this.publicId, Object.assign({ accessibility: this.accessibility }, this.options));
    }
}
CloudinaryImage.decorators = [
    { type: Component, args: [{
                selector: 'cl-image',
                template: `<img (load)="hasLoaded()">
  <div *ngIf="placeholderComponent && shouldShowPlaceHolder" [style.display]="shouldShowPlaceHolder ? 'inline' : 'none'">
    <ng-content></ng-content>
  </div>
  `
            }] }
];
/** @nocollapse */
CloudinaryImage.ctorParameters = () => [
    { type: ElementRef },
    { type: Cloudinary },
    { type: Renderer2 }
];
CloudinaryImage.propDecorators = {
    publicId: [{ type: Input, args: ['public-id',] }],
    clientHints: [{ type: Input, args: ['client-hints',] }],
    loading: [{ type: Input, args: ['loading',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    accessibility: [{ type: Input, args: ['accessibility',] }],
    transformations: [{ type: ContentChildren, args: [CloudinaryTransformationDirective,] }],
    placeholderComponent: [{ type: ContentChild, args: [CloudinaryPlaceHolder,] }],
    onLoad: [{ type: Output }],
    onError: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CloudinaryImage.prototype.publicId;
    /** @type {?} */
    CloudinaryImage.prototype.clientHints;
    /** @type {?} */
    CloudinaryImage.prototype.loading;
    /** @type {?} */
    CloudinaryImage.prototype.width;
    /** @type {?} */
    CloudinaryImage.prototype.height;
    /** @type {?} */
    CloudinaryImage.prototype.accessibility;
    /** @type {?} */
    CloudinaryImage.prototype.transformations;
    /** @type {?} */
    CloudinaryImage.prototype.placeholderComponent;
    /** @type {?} */
    CloudinaryImage.prototype.onLoad;
    /** @type {?} */
    CloudinaryImage.prototype.onError;
    /** @type {?} */
    CloudinaryImage.prototype.observer;
    /** @type {?} */
    CloudinaryImage.prototype.shouldShowPlaceHolder;
    /** @type {?} */
    CloudinaryImage.prototype.options;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.cloudinary;
    /**
     * @type {?}
     * @private
     */
    CloudinaryImage.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// See also video reference - http://cloudinary.com/documentation/video_manipulation_and_delivery#video_transformations_reference
class CloudinaryVideo {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryImageSourceDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryBackgroundImageDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyLoadDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
/** @type {?} */
const CLOUDINARY_LIB = new InjectionToken('CLOUDINARY_LIB');
/** @type {?} */
const CLOUDINARY_CONFIGURATION = new InjectionToken('CLOUDINARY_CONFIGURATION');
// Export this function to Angular's AOT to work
/**
 * @param {?} cloudinaryJsLib
 * @param {?} configuration
 * @return {?}
 */
function createCloudinary(cloudinaryJsLib, configuration) {
    return new Cloudinary(cloudinaryJsLib, configuration);
}
;
class CloudinaryModule {
    /**
     * @param {?} cloudinaryJsLib
     * @param {?} cloudinaryConfiguration
     * @return {?}
     */
    static forRoot(cloudinaryJsLib, cloudinaryConfiguration) {
        return {
            ngModule: CloudinaryModule,
            providers: [
                { provide: CLOUDINARY_LIB, useValue: cloudinaryJsLib },
                { provide: CLOUDINARY_CONFIGURATION, useValue: cloudinaryConfiguration },
                {
                    provide: Cloudinary,
                    useFactory: createCloudinary,
                    deps: [CLOUDINARY_LIB, CLOUDINARY_CONFIGURATION]
                }
            ]
        };
    }
}
CloudinaryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    CloudinaryImageSourceDirective,
                    CloudinaryBackgroundImageDirective,
                    CloudinaryImage,
                    CloudinaryVideo,
                    CloudinaryTransformationDirective,
                    LazyLoadDirective,
                    CloudinaryPlaceHolder,
                ],
                exports: [
                    CloudinaryImageSourceDirective,
                    CloudinaryBackgroundImageDirective,
                    CloudinaryImage,
                    CloudinaryVideo,
                    CloudinaryTransformationDirective,
                    LazyLoadDirective,
                    CloudinaryPlaceHolder
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CLOUDINARY_CONFIGURATION, CLOUDINARY_LIB, Cloudinary, CloudinaryBackgroundImageDirective, CloudinaryImage, CloudinaryImageSourceDirective, CloudinaryModule, CloudinaryPlaceHolder, CloudinaryTransformationDirective, CloudinaryVideo, LazyLoadDirective, createCloudinary, isBrowser, isJsonLikeString, isNamedNodeMap, namedNodeMapToObject, provideCloudinary, transformKeyNames };
//# sourceMappingURL=cloudinary-angular-5.x.js.map
