/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        return (_a = this._cloudinaryInstance).url.apply(_a, tslib_1.__spread(parameters));
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
        return (_a = this._cloudinaryInstance).imageTag.apply(_a, tslib_1.__spread(parameters));
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
        return (_a = this._cloudinaryInstance).videoTag.apply(_a, tslib_1.__spread(parameters));
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
export { Cloudinary };
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
export function provideCloudinary(cloudinaryJsLib, configuration) {
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
// For unit tests
export { isJsonLikeString, isNamedNodeMap, transformKeyNames, namedNodeMapToObject, isBrowser };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsb3VkaW5hcnkvYW5ndWxhci01LngvIiwic291cmNlcyI6WyJsaWIvY2xvdWRpbmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBWU0sZ0JBQWdCLEdBQUcsVUFBVSxHQUFRO0lBQ3pDLGdEQUFnRDtJQUNoRCxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7OztJQUVLLGlCQUFpQixHQUFHLFVBQVUsR0FBUTtJQUMxQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3hGLENBQUM7OztJQUVLLGNBQWMsR0FBRyxVQUFVLEdBQVE7SUFDdkMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxjQUFjLElBQUksR0FBRyxZQUFZLFlBQVksQ0FBQyxDQUFDO0FBQ3pGLENBQUM7OztJQUVLLG9CQUFvQixHQUFHLFVBQVUsTUFBb0I7O1FBQ3JELE1BQU0sR0FBRyxFQUFFO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLOztZQUN6QixJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7O1lBQ3pCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFN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TyxDQUFDO0lBRWpCLENBQUM7SUFBQSxDQUFDO0lBQ0osaUJBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDOzs7O0lBckVDLHlDQUF5Qjs7Ozs7Ozs7O0FBd0UzQixNQUFNLFVBQVUsaUJBQWlCLENBQUMsZUFBb0IsRUFBRSxhQUFzQztJQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsY0FBTSxPQUFBLElBQUksVUFBVSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsRUFBOUMsQ0FBOEMsRUFBRSxDQUFDO0FBQ25HLENBQUM7QUFBQSxDQUFDOztJQUVJLFNBQVMsR0FBRztJQUNoQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQztBQUN2QyxDQUFDO0FBRUQsaUJBQWlCOzs7O0FBQ2pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiBmcm9tICcuL2Nsb3VkaW5hcnktY29uZmlndXJhdGlvbi5jbGFzcyc7XG5pbXBvcnQgeyBDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nsb3VkaW5hcnktdHJhbnNmb3JtYXRpb24uZGlyZWN0aXZlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHN0cmluZyBiZWdpbnMgd2l0aCBhIGxlZnQgY3VybHkgYnJhY2UgYW5kIGVuZHMgd2l0aCBhIHJpZ2h0IGN1cmx5IGJyYWNlLCBlLmcuXG4gKiBcInthc2RhcyBkfVwiIHdpbGwgcmV0dXJuIHRydWUsIFwiYXNkYXNkfVwiIHdpbGwgcmV0dXJuIGZhbHNlLlxuICpcbiAqIHRoaXMgZnVuY3Rpb24gZG9lcyBub3QgdmFsaWRhdGUgdGhlIGNvcnJlY3RuZXNzIG9mIHRoZSBzdHJpbmcgY29udGVudCBvdGhlciB0aGFuIHRoZSBmaXJzdCBhbmQgbGFzdCBjaGFyYWN0ZXJcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xuY29uc3QgaXNKc29uTGlrZVN0cmluZyA9IGZ1bmN0aW9uIChzdHI6IGFueSk6IGJvb2xlYW4ge1xuICAvLyBbXFxzXFxTXSBhbGxvd3MgdGhlIHN0cmluZyB0byBjb250YWluIG5ldyBsaW5lc1xuICByZXR1cm4gc3RyICYmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIChzdHIudHJpbSgpLm1hdGNoKC9ee1tcXHNcXFNdKj99JC8pICE9PSBudWxsKTtcbn07XG5cbmNvbnN0IGlzQXJyYXlMaWtlU3RyaW5nID0gZnVuY3Rpb24gKHN0cjogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBzdHIgJiYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgKHN0ci50cmltKCkubWF0Y2goL15cXFtbXFxzXFxTXSo/XSQvKSAhPT0gbnVsbCk7XG59O1xuXG5jb25zdCBpc05hbWVkTm9kZU1hcCA9IGZ1bmN0aW9uIChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqICYmIChvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ05hbWVkTm9kZU1hcCcgfHwgb2JqIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKTtcbn07XG5cbmNvbnN0IG5hbWVkTm9kZU1hcFRvT2JqZWN0ID0gZnVuY3Rpb24gKHNvdXJjZTogTmFtZWROb2RlTWFwKTogYW55IHtcbiAgbGV0IHRhcmdldCA9IHt9O1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goaW5kZXggPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBzb3VyY2VbaW5kZXhdLm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBzb3VyY2VbaW5kZXhdLnZhbHVlO1xuICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybUtleU5hbWVzID0gZnVuY3Rpb24gKG9iajogYW55KTogYW55IHtcbiAgbGV0IF9vYmogPSBvYmo7XG4gIGlmIChpc0pzb25MaWtlU3RyaW5nKG9iaikgfHwgaXNBcnJheUxpa2VTdHJpbmcob2JqKSkge1xuICAgIC8vIEdpdmVuIGF0dHJpYnV0ZSB2YWx1ZSBpcyBpbiB0aGUgZm9ybSBvZiBhIEpTT04gb2JqZWN0IC1cbiAgICAvLyBUcmFuc2Zvcm1zIHRoZSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb3IgYXJyYXksIGFzIHRoZSBKYXZhc2NyaXB0IEFQSSBleHBlY3RzXG5cbiAgICBpZiAoaXNBcnJheUxpa2VTdHJpbmcob2JqKSkge1xuICAgICAgb2JqID0gb2JqLnJlcGxhY2UoLycvZywgJ1wiJyk7XG4gICAgfVxuICAgIF9vYmogPSBKU09OLnBhcnNlKG9iaik7XG4gIH0gZWxzZSBpZiAoaXNOYW1lZE5vZGVNYXAob2JqKSkge1xuICAgIF9vYmogPSBuYW1lZE5vZGVNYXBUb09iamVjdChvYmopO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoX29iaikpIHtcbiAgICAvLyBUcmFuc2Zvcm0gYWxsIHRoZSBhcnJheSB2YWx1ZXMgKGUuZy4gdHJhbnNmb3JtYXRpb24gYXJyYXkpXG4gICAgX29iaiA9IF9vYmoubWFwKGN1cnJlbnRWYWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtS2V5TmFtZXMoY3VycmVudFZhbHVlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgX29iaiA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhfb2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAvLyBSZXBsYWNlIHRoZSBrZXkgbmFtZSB3aXRoIHRoZSBzbmFrZV9jYXNlXG4gICAgICAvLyBUaGVuIHN0cmlwIGNsZCBwcmVmaXggaWYgaXQgZXhpc3RzICh3aXRoIGFuIG9wdGlvbmFsIGRhc2ggb3IgdW5kZXJzY29yZSlcbiAgICAgIGNvbnN0IGtlYmFiS2V5ID0ga2V5LnJlcGxhY2UoLy0vZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL15jbGQoLXxfKT8vLCAnJyk7XG4gICAgICBjb25zdCBrZWJhYlZhbHVlID0gdHJhbnNmb3JtS2V5TmFtZXMoX29ialtrZXldKTtcbiAgICAgIGRlbGV0ZSBfb2JqW2tleV07XG4gICAgICBfb2JqW2tlYmFiS2V5XSA9IGtlYmFiVmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIF9vYmo7XG59O1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRpbmFyeSB7XG4gIF9jbG91ZGluYXJ5SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihjbG91ZGluYXJ5SnNMaWI6IGFueSwgY29uZmlndXJhdGlvbjogQ2xvdWRpbmFyeUNvbmZpZ3VyYXRpb24pIHtcbiAgICAvLyBDbG91ZGluYXJ5IEpTIGFscmVhZHkgY2xvbmVzIHRoZSBnaXZlbiBjb25maWd1cmF0aW9uIHNvIG5vIG5lZWQgdG8gY2xvbmUgaXQgaGVyZSB0b29cbiAgICBpZiAoY2xvdWRpbmFyeUpzTGliLkNsb3VkaW5hcnlKUXVlcnkpIHtcbiAgICAgIHRoaXMuX2Nsb3VkaW5hcnlJbnN0YW5jZSA9IG5ldyBjbG91ZGluYXJ5SnNMaWIuQ2xvdWRpbmFyeUpRdWVyeShjb25maWd1cmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xvdWRpbmFyeUluc3RhbmNlID0gbmV3IGNsb3VkaW5hcnlKc0xpYi5DbG91ZGluYXJ5KGNvbmZpZ3VyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbG91ZGluYXJ5SW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY2xvdWRpbmFyeUluc3RhbmNlO1xuICB9XG5cbiAgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGluYXJ5SW5zdGFuY2UuY29uZmlnKCk7XG4gIH1cblxuICB1cGRhdGVDb25maWcoY29uZmlndXJhdGlvbjogQ2xvdWRpbmFyeUNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLl9jbG91ZGluYXJ5SW5zdGFuY2UuY29uZmlnKGNvbmZpZ3VyYXRpb24pO1xuICB9XG5cbiAgdXJsKC4uLnBhcmFtZXRlcnMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGluYXJ5SW5zdGFuY2UudXJsKC4uLnBhcmFtZXRlcnMpO1xuICB9XG5cbiAgaW1hZ2VUYWcoLi4ucGFyYW1ldGVycyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3VkaW5hcnlJbnN0YW5jZS5pbWFnZVRhZyguLi5wYXJhbWV0ZXJzKTtcbiAgfVxuXG4gIHZpZGVvVGFnKC4uLnBhcmFtZXRlcnMpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jbG91ZGluYXJ5SW5zdGFuY2UudmlkZW9UYWcoLi4ucGFyYW1ldGVycyk7XG4gIH1cblxuICByZXNwb25zaXZlKGltZzogSFRNTEltYWdlRWxlbWVudCwgb3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgLy8gQ2xvdWRpbmFyeSB1bmRlcmx5aW5nIEpTIGxpYnJhcnkgd2lsbCBoYW5kbGUgcmVzcG9uc2l2ZSBiZWhhdmlvclxuICAgIHRoaXMuX2Nsb3VkaW5hcnlJbnN0YW5jZS5jbG91ZGluYXJ5X3VwZGF0ZShpbWcsIG9wdGlvbnMpO1xuICAgIHRoaXMuX2Nsb3VkaW5hcnlJbnN0YW5jZS5yZXNwb25zaXZlKG9wdGlvbnMsIGZhbHNlKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgYSBzZXQgb2YgYXR0cmlidXRlcyBhbmQgY2hhaW5lZCB0cmFuc2Zvcm1hdGlvbnMgdG8gYW4gb3B0aW9ucyBvYmplY3QgdGhhdCBjYW4gYmUgY29uc3VtZWQgYnkgQ2xvdWRpbmFyeSBKUyBBUElcbiAgICogQHBhcmFtIGF0dHJpYnV0ZXMgSFRNTCBlbGVtZW50IGF0dHJpYnV0ZXNcbiAgICogQHBhcmFtIGNoaWxkVHJhbnNmb3JtYXRpb25zIFF1ZXJ5TGlzdCB3aXRoIHRoZSBlbGVtZW50J3MgPGNsLXRyYW5zZm9ybWF0aW9uPiBjaGlsZHJlbiBmb3IgY2hhaW5lZCB0cmFuc2Zvcm1hdGlvbnNcbiAgICogQHBhcmFtIGNsb3VkaW5hcnkgQ2xvdWRpbmFyeSBzZXJ2aWNlXG4gICAqIEByZXR1cm5zIEFuIG9wdGlvbnMgb2JqZWN0IHRoYXQgY2FuIGJlIGNvbnN1bWVkIGJ5IENsb3VkaW5hcnkgSlMgQVBJXG4gICAqL1xuICB0b0Nsb3VkaW5hcnlBdHRyaWJ1dGVzKGF0dHJpYnV0ZXM6IE5hbWVkTm9kZU1hcCxcbiAgICBjaGlsZFRyYW5zZm9ybWF0aW9ucz86IFF1ZXJ5TGlzdDxDbG91ZGluYXJ5VHJhbnNmb3JtYXRpb25EaXJlY3RpdmU+KTogYW55IHtcbiAgICBjb25zdCBvcHRpb25zID0gdHJhbnNmb3JtS2V5TmFtZXMoYXR0cmlidXRlcyk7XG5cbiAgICAvLyBBZGQgY2hhaW5lZCB0cmFuc2Zvcm1hdGlvbnNcbiAgICBpZiAoY2hpbGRUcmFuc2Zvcm1hdGlvbnMgJiYgY2hpbGRUcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgb3B0aW9ucy50cmFuc2Zvcm1hdGlvbiA9IFtdO1xuICAgICAgLy8gU3VwcG9ydCBjaGFpbmVkIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgY2hpbGRUcmFuc2Zvcm1hdGlvbnMuZm9yRWFjaCh0cmFuc2Zvcm1hdGlvbiA9PiB7XG4gICAgICAgIG9wdGlvbnMudHJhbnNmb3JtYXRpb24ucHVzaCh0aGlzLnRvQ2xvdWRpbmFyeUF0dHJpYnV0ZXModHJhbnNmb3JtYXRpb24uZ2V0QXR0cmlidXRlcygpKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2l2ZW5lc3NcbiAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlID09PSAnJyB8fCBvcHRpb25zLnJlc3BvbnNpdmUgPT09ICd0cnVlJyB8fCBvcHRpb25zLnJlc3BvbnNpdmUgPT09IHRydWUpIHtcbiAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuXG4gIH07XG59XG5cbi8qIFJldHVybiBhIHByb3ZpZGVyIG9iamVjdCB0aGF0IGNyZWF0ZXMgb3VyIGNvbmZpZ3VyYWJsZSBzZXJ2aWNlICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNsb3VkaW5hcnkoY2xvdWRpbmFyeUpzTGliOiBhbnksIGNvbmZpZ3VyYXRpb246IENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSB7XG4gIHJldHVybiB7IHByb3ZpZGU6IENsb3VkaW5hcnksIHVzZUZhY3Rvcnk6ICgpID0+IG5ldyBDbG91ZGluYXJ5KGNsb3VkaW5hcnlKc0xpYiwgY29uZmlndXJhdGlvbikgfTtcbn07XG5cbmNvbnN0IGlzQnJvd3NlciA9IGZ1bmN0aW9uICgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xufVxuXG4vLyBGb3IgdW5pdCB0ZXN0c1xuZXhwb3J0IHsgaXNKc29uTGlrZVN0cmluZywgaXNOYW1lZE5vZGVNYXAsIHRyYW5zZm9ybUtleU5hbWVzLCBuYW1lZE5vZGVNYXBUb09iamVjdCwgaXNCcm93c2VyIH07XG4iXX0=