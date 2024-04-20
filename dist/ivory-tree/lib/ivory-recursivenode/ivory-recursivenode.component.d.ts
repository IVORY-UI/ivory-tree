import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { UniqueIdGeneratorService } from '../providers/uniquegen.service';
import * as i0 from "@angular/core";
export declare class IvoryRecursivenodeComponent implements OnInit, OnDestroy {
    uniqueIdService: UniqueIdGeneratorService;
    _node: any;
    _title: any;
    _uniqueId: any;
    _expanded: boolean;
    set node(value: any);
    get node(): any;
    set nodeTitle(value: any);
    get nodeTitle(): any;
    nodeSelectable: boolean;
    set nodeExpanded(value: boolean);
    whenNodeSelect: EventEmitter<any>;
    emitNodeSelection(status: any): void;
    constructor(uniqueIdService: UniqueIdGeneratorService);
    ngOnInit(): void;
    nodeSelectionChange(event: any): void;
    impactChildrenSelection(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IvoryRecursivenodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IvoryRecursivenodeComponent, "ivory-recursivenode", never, { "node": { "alias": "node"; "required": false; }; "nodeTitle": { "alias": "nodeTitle"; "required": false; }; "nodeSelectable": { "alias": "nodeSelectable"; "required": false; }; "nodeExpanded": { "alias": "nodeExpanded"; "required": false; }; }, { "whenNodeSelect": "whenNodeSelect"; }, never, ["*"], false, never>;
}
