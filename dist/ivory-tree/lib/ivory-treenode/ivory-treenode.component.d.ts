import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IvoryTreenodeComponent implements OnInit, OnDestroy {
    _node: any;
    _title: any;
    set node(value: any);
    get node(): any;
    set nodeTitle(value: any);
    get nodeTitle(): any;
    isNodeDisabled: boolean;
    whenNodeSelect: EventEmitter<any>;
    whenNodeExpand: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IvoryTreenodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IvoryTreenodeComponent, "ivory-treenode", never, { "node": { "alias": "node"; "required": false; }; "nodeTitle": { "alias": "nodeTitle"; "required": false; }; "isNodeDisabled": { "alias": "isNodeDisabled"; "required": false; }; }, { "whenNodeSelect": "whenNodeSelect"; "whenNodeExpand": "whenNodeExpand"; }, never, never, false, never>;
}
