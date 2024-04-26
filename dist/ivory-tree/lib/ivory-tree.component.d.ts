import { OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IvoryTreeComponent implements OnInit, OnDestroy {
    treeRecursive: boolean;
    treeData: any;
    treeNodeSelection: boolean;
    treeExpandByDefault: boolean;
    nodeTitleParam: string;
    constructor();
    ngOnInit(): void;
    /**
     * Invokes when any node checkbox selected/unselected and maintains the pile of selected nodes.
     * @param event Change event
     */
    nodeSelectionChange(event: any): void;
    /**
     * Invokes when any node checked/unchecked. Convenience method to add/remove the node from the selected
     * folders stack.
     * @param source Selected folder node
     */
    updateStack(source: any): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IvoryTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IvoryTreeComponent, "ivory-tree", never, { "treeRecursive": { "alias": "treeRecursive"; "required": false; }; "treeData": { "alias": "treeData"; "required": false; }; "treeNodeSelection": { "alias": "treeNodeSelection"; "required": false; }; "treeExpandByDefault": { "alias": "treeExpandByDefault"; "required": false; }; "nodeTitleParam": { "alias": "nodeTitleParam"; "required": false; }; }, {}, never, ["*"], false, never>;
}
