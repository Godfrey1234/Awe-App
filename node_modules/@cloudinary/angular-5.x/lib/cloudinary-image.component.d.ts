import { ElementRef, EventEmitter, QueryList, AfterViewInit, AfterContentChecked, OnInit, OnChanges, SimpleChanges, OnDestroy, Renderer2 } from '@angular/core';
import { Cloudinary } from './cloudinary.service';
import { CloudinaryTransformationDirective } from './cloudinary-transformation.directive';
import { CloudinaryPlaceHolder } from './cloudinary-placeholder.component';
export declare class CloudinaryImage implements AfterViewInit, OnInit, AfterViewInit, AfterContentChecked, OnChanges, OnDestroy {
    private el;
    private cloudinary;
    private renderer;
    publicId: string;
    clientHints?: boolean;
    loading: string;
    width?: string;
    height?: string;
    accessibility?: string;
    transformations: QueryList<CloudinaryTransformationDirective>;
    placeholderComponent: CloudinaryPlaceHolder;
    onLoad: EventEmitter<boolean>;
    onError: EventEmitter<boolean>;
    observer: MutationObserver;
    shouldShowPlaceHolder: boolean;
    options: object;
    constructor(el: ElementRef, cloudinary: Cloudinary, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     */
    setPlaceHolderStyle(): void;
    hasLoaded(): void;
    loadImage(): void;
    setElementAttributes(element: any, attributesLiteral: any): void;
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     */
    placeholderHandler(options: any, image: any): void;
    accessibilityModeHandler(): string;
}
