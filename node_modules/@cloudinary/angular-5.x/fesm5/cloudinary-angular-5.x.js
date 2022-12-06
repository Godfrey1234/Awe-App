import { __spread, __assign } from 'tslib';
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
var isJsonLikeString = function (str) {
    // [\s\S] allows the string to contain new lines
    return str && typeof str === 'string' && (str.trim().match(/^{[\s\S]*?}$/) !== null);
};
var ɵ0 = isJsonLikeString;
/** @type {?} */
var isArrayLikeString = function (str) {
    return str && typeof str === 'string' && (str.trim().match(/^\[[\s\S]*?]$/) !== null);
};
var ɵ1 = isArrayLikeString;
/** @type {?} */
var isNamedNodeMap = function (obj) {
    return obj && (obj.constructor.name === 'NamedNodeMap' || obj instanceof NamedNodeMap);
};
var ɵ2 = isNamedNodeMap;
/** @type {?} */
var namedNodeMapToObject = function (source) {
    /** @type {?} */
    var target = {};
    Object.keys(source).forEach(function (index) {
        /** @type {?} */
        var name = source[index].name;
        /** @type {?} */
        var value = source[index].value;
        target[name] = value;
    });
    return target;
};
var ɵ3 = namedNodeMapToObject;
/** @type {?} */
var transformKeyNames = function (obj) {
    /** @type {?} */
    var _obj = obj;
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
        _obj = _obj.map(function (currentValue) {
            return transformKeyNames(currentValue);
        });
    }
    else if (typeof _obj === 'object') {
        Object.keys(_obj).forEach(function (key) {
            // Replace the key name with the snake_case
            // Then strip cld prefix if it exists (with an optional dash or underscore)
            /** @type {?} */
            var kebabKey = key.replace(/-/g, '_').toLocaleLowerCase().replace(/^cld(-|_)?/, '');
            /** @type {?} */
            var kebabValue = transformKeyNames(_obj[key]);
            delete _obj[key];
            _obj[kebabKey] = kebabValue;
        });
    }
    return _obj;
};
var ɵ4 = transformKeyNames;
var Cloudinary = /** @class */ (function () {
    function Cloudinary(cloudinaryJsLib, configuration) {
        // Cloudinary JS already clones the given configuration so no need to clone it here too
        if (cloudinaryJsLib.CloudinaryJQuery) {
            this._cloudinaryInstance = new cloudinaryJsLib.CloudinaryJQuery(configuration);
        }
        else {
            this._cloudinaryInstance = new cloudinaryJsLib.Cloudinary(configuration);
        }
    }
    Object.defineProperty(Cloudinary.prototype, "cloudinaryInstance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cloudinaryInstance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Cloudinary.prototype.config = /**
     * @return {?}
     */
    function () {
        return this._cloudinaryInstance.config();
    };
    /**
     * @param {?} configuration
     * @return {?}
     */
    Cloudinary.prototype.updateConfig = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        this._cloudinaryInstance.config(configuration);
    };
    /**
     * @param {...?} parameters
     * @return {?}
     */
    Cloudinary.prototype.url = /**
     * @param {...?} parameters
     * @return {?}
     */
    function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var _a;
        return (_a = this._cloudinaryInstance).url.apply(_a, __spread(parameters));
    };
    /**
     * @param {...?} parameters
     * @return {?}
     */
    Cloudinary.prototype.imageTag = /**
     * @param {...?} parameters
     * @return {?}
     */
    function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var _a;
        return (_a = this._cloudinaryInstance).imageTag.apply(_a, __spread(parameters));
    };
    /**
     * @param {...?} parameters
     * @return {?}
     */
    Cloudinary.prototype.videoTag = /**
     * @param {...?} parameters
     * @return {?}
     */
    function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var _a;
        return (_a = this._cloudinaryInstance).videoTag.apply(_a, __spread(parameters));
    };
    /**
     * @param {?} img
     * @param {?} options
     * @return {?}
     */
    Cloudinary.prototype.responsive = /**
     * @param {?} img
     * @param {?} options
     * @return {?}
     */
    function (img, options) {
        // Cloudinary underlying JS library will handle responsive behavior
        this._cloudinaryInstance.cloudinary_update(img, options);
        this._cloudinaryInstance.responsive(options, false);
    };
    /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param attributes HTML element attributes
     * @param childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @param cloudinary Cloudinary service
     * @returns An options object that can be consumed by Cloudinary JS API
     */
    /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param {?} attributes HTML element attributes
     * @param {?=} childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @return {?} An options object that can be consumed by Cloudinary JS API
     */
    Cloudinary.prototype.toCloudinaryAttributes = /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param {?} attributes HTML element attributes
     * @param {?=} childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @return {?} An options object that can be consumed by Cloudinary JS API
     */
    function (attributes, childTransformations) {
        var _this = this;
        /** @type {?} */
        var options = transformKeyNames(attributes);
        // Add chained transformations
        if (childTransformations && childTransformations.length > 0) {
            options.transformation = [];
            // Support chained transformations
            childTransformations.forEach(function (transformation) {
                options.transformation.push(_this.toCloudinaryAttributes(transformation.getAttributes()));
            });
        }
        // Add responsiveness
        if (options.responsive === '' || options.responsive === 'true' || options.responsive === true) {
            options.responsive = true;
        }
        return options;
    };
    ;
    return Cloudinary;
}());
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
    return { provide: Cloudinary, useFactory: function () { return new Cloudinary(cloudinaryJsLib, configuration); } };
}
;
/** @type {?} */
var isBrowser = function () {
    return typeof window !== 'undefined';
}
// For unit tests
;
var ɵ5 = isBrowser;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CloudinaryTransformationDirective = /** @class */ (function () {
    function CloudinaryTransformationDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    CloudinaryTransformationDirective.prototype.getAttributes = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement.attributes;
    };
    CloudinaryTransformationDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'cl-transformation'
                },] }
    ];
    /** @nocollapse */
    CloudinaryTransformationDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return CloudinaryTransformationDirective;
}());
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
            return this.cloudinary.url(this.publicId, __assign({ placeholder: 'predominant-color-pixel' || true }, this.options));
        }
        else {
            return this.cloudinary.url(this.publicId, __assign({ placeholder: this.type || true }, this.options));
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
var APP_VERSION = '1.5.3';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SDKAnalyticsConstants = {
    sdkSemver: APP_VERSION,
    techVersion: VERSION.full,
    sdkCode: 'K',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CloudinaryImage = /** @class */ (function () {
    function CloudinaryImage(el, cloudinary, renderer) {
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
    CloudinaryImage.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(function () {
                _this.loadImage();
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
    CloudinaryImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadImage();
        }
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.ngOnDestroy = /**
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
    CloudinaryImage.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.loadImage();
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        if (this.width && this.placeholderComponent) {
            this.placeholderComponent.setWidth(this.width);
        }
        if (this.height && this.placeholderComponent) {
            this.placeholderComponent.setHeight(this.height);
        }
        if (this.placeholderComponent) {
            this.placeholderComponent.setPublicId(this.publicId);
        }
    };
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     */
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    CloudinaryImage.prototype.setPlaceHolderStyle = /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    function () {
        if (this.shouldShowPlaceHolder) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'absolute');
        }
        else {
            // note this only removes styling from cl-img->img and not cl-img
            this.renderer.removeAttribute(this.el.nativeElement.children[0], 'style');
        }
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.hasLoaded = /**
     * @return {?}
     */
    function () {
        this.shouldShowPlaceHolder = false;
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.loadImage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            /** @type {?} */
            var nativeElement = this.el.nativeElement;
            /** @type {?} */
            var image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = function (e) {
                _this.onLoad.emit(e);
            };
            image.onerror = function (e) {
                _this.onError.emit(e);
            };
            this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            if (this.clientHints || (typeof this.clientHints === 'undefined' && this.cloudinary.config().client_hints)) {
                delete this.options['class'];
                delete this.options['data-src'];
                delete this.options['responsive'];
            }
            if (this.cloudinary.config().urlAnalytics) {
                this.options = __assign({}, SDKAnalyticsConstants, this.options);
            }
            if (this.placeholderComponent) {
                this.placeholderHandler(this.options, image);
            }
            if (this.accessibility) {
                this.options['src'] = this.accessibilityModeHandler();
            }
            /** @type {?} */
            var imageTag = this.cloudinary.imageTag(this.publicId, this.options);
            this.setElementAttributes(image, imageTag.attributes());
            if (this.options['responsive']) {
                this.cloudinary.responsive(image, this.options);
            }
        }
    };
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    CloudinaryImage.prototype.setElementAttributes = /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    function (element, attributesLiteral) {
        var _this = this;
        Object.keys(attributesLiteral).forEach(function (attrName) {
            /** @type {?} */
            var attr = attrName === 'src' && _this.loading === 'lazy' ? 'data-src' : attrName;
            _this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
        });
        // Enforcing placeholder style
        if (this.placeholderComponent) {
            this.setPlaceHolderStyle();
        }
    };
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     */
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    CloudinaryImage.prototype.placeholderHandler = /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    function (options, image) {
        /** @type {?} */
        var placeholderOptions = __assign({}, options);
        if (placeholderOptions['width']) {
            if (placeholderOptions['width'] === 'auto') {
                placeholderOptions['width'] = image.getAttribute('data-width');
            }
        }
        this.placeholderComponent.options = placeholderOptions;
    };
    /**
     * @return {?}
     */
    CloudinaryImage.prototype.accessibilityModeHandler = /**
     * @return {?}
     */
    function () {
        return this.cloudinary.url(this.publicId, __assign({ accessibility: this.accessibility }, this.options));
    };
    CloudinaryImage.decorators = [
        { type: Component, args: [{
                    selector: 'cl-image',
                    template: "<img (load)=\"hasLoaded()\">\n  <div *ngIf=\"placeholderComponent && shouldShowPlaceHolder\" [style.display]=\"shouldShowPlaceHolder ? 'inline' : 'none'\">\n    <ng-content></ng-content>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    CloudinaryImage.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Cloudinary },
        { type: Renderer2 }
    ]; };
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
    return CloudinaryImage;
}());
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
var CLOUDINARY_LIB = new InjectionToken('CLOUDINARY_LIB');
/** @type {?} */
var CLOUDINARY_CONFIGURATION = new InjectionToken('CLOUDINARY_CONFIGURATION');
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
var CloudinaryModule = /** @class */ (function () {
    function CloudinaryModule() {
    }
    /**
     * @param {?} cloudinaryJsLib
     * @param {?} cloudinaryConfiguration
     * @return {?}
     */
    CloudinaryModule.forRoot = /**
     * @param {?} cloudinaryJsLib
     * @param {?} cloudinaryConfiguration
     * @return {?}
     */
    function (cloudinaryJsLib, cloudinaryConfiguration) {
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
    };
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
    return CloudinaryModule;
}());

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
