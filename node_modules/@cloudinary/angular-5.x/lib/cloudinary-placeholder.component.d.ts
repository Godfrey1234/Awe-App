import { AfterContentChecked, ElementRef, Renderer2 } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
export declare class CloudinaryPlaceHolder implements AfterContentChecked {
    private cloudinary;
    private renderer;
    private el;
    type: string;
    itemWidth: any;
    itemHeight: any;
    publicId: any;
    options: object;
    placeholderImg: string;
    constructor(cloudinary: Cloudinary, renderer: Renderer2, el: ElementRef);
    setWidth(width: any): void;
    setHeight(height: any): void;
    setPublicId(id: any): void;
    ngAfterContentChecked(): void;
    getPlaceholderImage(): string;
    setElementAttributes(element: any, attributesLiteral: any): void;
}
