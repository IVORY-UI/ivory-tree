import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IvoryTreenodeComponent {
    _node: any;
    _isExpanded: boolean;
    set node(value: any);
    get node(): any;
    set nodeExpanded(value: any);
    nodeHasChildren: boolean;
    isNodeDisabled: boolean;
    whenNodeSelect: EventEmitter<any>;
    whenNodeExpand: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IvoryTreenodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IvoryTreenodeComponent, "ivory-treenode", never, { "node": { "alias": "node"; "required": false; }; "nodeExpanded": { "alias": "nodeExpanded"; "required": false; }; "nodeHasChildren": { "alias": "nodeHasChildren"; "required": false; }; "isNodeDisabled": { "alias": "isNodeDisabled"; "required": false; }; }, { "whenNodeSelect": "whenNodeSelect"; "whenNodeExpand": "whenNodeExpand"; }, never, ["[title]", "*"], false, never>;
}
