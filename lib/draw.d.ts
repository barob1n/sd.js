/// <reference path="../typings/tsd.d.ts" />
import type = require('./type');
import xmile = require('./xmile');
export interface EntStatic {
    new (drawing: Drawing, element: xmile.ViewElement): Ent;
}
export interface Ent {
    ident: string;
    dName: string;
    cx: number;
    cy: number;
    set: Snap.Element;
    to: string;
    from: string;
    init(): void;
    draw(): void;
    drawLabel(): void;
    visualize(times: number[], values: number[]): void;
}
export interface Transform {
    scale: number;
    dscale: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
}
export declare class Drawing {
    model: type.Model;
    xmile: xmile.View;
    colorOverride: boolean;
    stocksXYCenter: boolean;
    paper: Snap.Paper;
    _g: Snap.Element;
    _t: Transform;
    d_ents: Ent[];
    named_ents: {
        [n: string]: Ent;
    };
    z_ents: Ent[][];
    constructor(model: type.Model, view: xmile.View, svgElement: string | HTMLElement, overrideColors: boolean, enableMousewheel: boolean, stocksXYCenter: boolean);
    applyDScaleAt(dscale: number, e: any): void;
    transform(scale?: number, x?: number, y?: number): void;
    normalizeTransform(): void;
    visualize(data: any): void;
    group(...args: any[]): Snap.Element;
}
