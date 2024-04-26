import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class UniqueIdGeneratorService {
    getUniqueId() {
        const randomness = Math.random().toString(36).slice(2, 11);
        return randomness;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: UniqueIdGeneratorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class IvoryRecursivenodeComponent {
    set node(value) {
        this._node = value;
    }
    get node() {
        return this._node;
    }
    set nodeTitle(value) {
        this._title = value;
    }
    get nodeTitle() {
        return this._title;
    }
    set nodeExpanded(value) {
        this._expanded = value;
    }
    emitNodeSelection(status) {
        this.whenNodeSelect.emit(this._node);
    }
    constructor(uniqueIdService) {
        this.uniqueIdService = uniqueIdService;
        this._expanded = false;
        this.nodeSelectable = false;
        this.whenNodeSelect = new EventEmitter();
        this._uniqueId = this.uniqueIdService.getUniqueId();
    }
    ngOnInit() {
    }
    nodeSelectionChange(event) {
        event.stopPropagation();
        this._node.isSelected = event.target.checked;
        if (this._node.children && this._node.children.length > 0) {
            this.impactChildrenSelection();
        }
        this.emitNodeSelection(event.target.checked);
    }
    impactChildrenSelection() {
        for (let i = 0; i < this._node.children.length; i++) {
            this._node.children[i]['isSelected'] = this._node.isSelected;
        }
    }
    ngOnDestroy() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryRecursivenodeComponent, deps: [{ token: UniqueIdGeneratorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryRecursivenodeComponent, selector: "ivory-recursivenode", inputs: { node: "node", nodeTitle: "nodeTitle", nodeSelectable: "nodeSelectable", nodeExpanded: "nodeExpanded" }, outputs: { whenNodeSelect: "whenNodeSelect" }, ngImport: i0, template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (node.children && node.children.length>0) {\n        <button (click)=\"_expanded=!_expanded\">\n          @if (!_expanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      @if (nodeSelectable) {\n        <input\n          type=\"checkbox\"\n          id=\"{{_uniqueId}}\"\n          class=\"node-checkbox\"\n          [name]=\"node.name\"\n          (change)=\"nodeSelectionChange($event)\"\n          [(ngModel)]=\"node.isSelected\"\n        />\n        <label for=\"{{_uniqueId}}\">\n          {{ node.name }}\n        </label>\n      }\n      @else {\n        <span>\n          {{ node.name }}\n        </span>\n      }\n    </div>\n  </div>\n  \n  @if (_expanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-title{color:#22343c}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n", ".ivory-node-title{position:relative;display:flex}.ivory-node-title label{position:relative;display:block;height:2rem;padding-left:1.75rem;margin-top:0;color:#22343c;line-height:2rem;cursor:pointer}.ivory-node-title input[type=checkbox]{position:absolute;opacity:0;top:.125rem;left:.125rem;height:.66667rem;width:.66667rem}.ivory-node-title input[type=checkbox]+label:before{position:absolute;top:.5rem;left:.2rem;content:\"\";display:inline-block;height:1rem;width:1rem;border:1px solid #999999;border-radius:.125rem}.ivory-node-title input[type=checkbox]+label:after{position:absolute;content:\"\";display:none;height:.35rem;width:.6rem;border-left:.18rem solid #fff;border-bottom:.18rem solid #fff;top:.6rem;left:.4rem;-webkit-transform:translate(0,.16666675rem) rotate(-45deg);transform:translateY(.16666675rem) rotate(-45deg)}.ivory-node-title input[type=checkbox]:checked+label:before{background:#0077b8;border:none}.ivory-node-title input[type=checkbox]:checked+label:after{display:inline-block}.ivory-node-title input[type=checkbox]:focus+label:before{outline:0;box-shadow:0 0 2px 2px #69c0e2}.ivory-node-title input[type=checkbox]:disabled{cursor:not-allowed}.ivory-node-title input[type=checkbox]:disabled+label:before{background-color:#ccc;border:none;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryRecursivenodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-recursivenode', template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (node.children && node.children.length>0) {\n        <button (click)=\"_expanded=!_expanded\">\n          @if (!_expanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      @if (nodeSelectable) {\n        <input\n          type=\"checkbox\"\n          id=\"{{_uniqueId}}\"\n          class=\"node-checkbox\"\n          [name]=\"node.name\"\n          (change)=\"nodeSelectionChange($event)\"\n          [(ngModel)]=\"node.isSelected\"\n        />\n        <label for=\"{{_uniqueId}}\">\n          {{ node.name }}\n        </label>\n      }\n      @else {\n        <span>\n          {{ node.name }}\n        </span>\n      }\n    </div>\n  </div>\n  \n  @if (_expanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-title{color:#22343c}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n", ".ivory-node-title{position:relative;display:flex}.ivory-node-title label{position:relative;display:block;height:2rem;padding-left:1.75rem;margin-top:0;color:#22343c;line-height:2rem;cursor:pointer}.ivory-node-title input[type=checkbox]{position:absolute;opacity:0;top:.125rem;left:.125rem;height:.66667rem;width:.66667rem}.ivory-node-title input[type=checkbox]+label:before{position:absolute;top:.5rem;left:.2rem;content:\"\";display:inline-block;height:1rem;width:1rem;border:1px solid #999999;border-radius:.125rem}.ivory-node-title input[type=checkbox]+label:after{position:absolute;content:\"\";display:none;height:.35rem;width:.6rem;border-left:.18rem solid #fff;border-bottom:.18rem solid #fff;top:.6rem;left:.4rem;-webkit-transform:translate(0,.16666675rem) rotate(-45deg);transform:translateY(.16666675rem) rotate(-45deg)}.ivory-node-title input[type=checkbox]:checked+label:before{background:#0077b8;border:none}.ivory-node-title input[type=checkbox]:checked+label:after{display:inline-block}.ivory-node-title input[type=checkbox]:focus+label:before{outline:0;box-shadow:0 0 2px 2px #69c0e2}.ivory-node-title input[type=checkbox]:disabled{cursor:not-allowed}.ivory-node-title input[type=checkbox]:disabled+label:before{background-color:#ccc;border:none;cursor:not-allowed}\n"] }]
        }], ctorParameters: () => [{ type: UniqueIdGeneratorService }], propDecorators: { node: [{
                type: Input
            }], nodeTitle: [{
                type: Input
            }], nodeSelectable: [{
                type: Input
            }], nodeExpanded: [{
                type: Input
            }], whenNodeSelect: [{
                type: Output
            }] } });

class IvoryTreenodeComponent {
    constructor() {
        this._isExpanded = false;
        this.nodeHasChildren = false;
        this.isNodeDisabled = false;
        this.whenNodeSelect = new EventEmitter();
        this.whenNodeExpand = new EventEmitter();
    }
    set node(value) {
        this._node = value;
    }
    get node() {
        return this._node;
    }
    set nodeExpanded(value) {
        this._isExpanded = value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreenodeComponent, selector: "ivory-treenode", inputs: { node: "node", nodeExpanded: "nodeExpanded", nodeHasChildren: "nodeHasChildren", isNodeDisabled: "isNodeDisabled" }, outputs: { whenNodeSelect: "whenNodeSelect", whenNodeExpand: "whenNodeExpand" }, ngImport: i0, template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (nodeHasChildren) {\n        <button (click)=\"_isExpanded=!_isExpanded\">\n          @if (!_isExpanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      <ng-content select=\"[title]\"></ng-content>\n    </div>\n  </div>\n  @if (nodeHasChildren && _isExpanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-title{color:#22343c}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-treenode', template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (nodeHasChildren) {\n        <button (click)=\"_isExpanded=!_isExpanded\">\n          @if (!_isExpanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      <ng-content select=\"[title]\"></ng-content>\n    </div>\n  </div>\n  @if (nodeHasChildren && _isExpanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-title{color:#22343c}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n"] }]
        }], propDecorators: { node: [{
                type: Input
            }], nodeExpanded: [{
                type: Input
            }], nodeHasChildren: [{
                type: Input
            }], isNodeDisabled: [{
                type: Input
            }], whenNodeSelect: [{
                type: Output
            }], whenNodeExpand: [{
                type: Output
            }] } });

class IvoryTreeComponent {
    constructor() {
        this.treeRecursive = false;
        this.treeNodeSelection = false;
        this.treeExpandByDefault = false;
        this.nodeTitleParam = '';
    }
    ngOnInit() {
    }
    /**
     * Invokes when any node checkbox selected/unselected and maintains the pile of selected nodes.
     * @param event Change event
     */
    nodeSelectionChange(event) {
        console.log('Selected node -> ', event);
        // for (const item of this.childTreeNode.toArray()) {
        //   // Close action menu if already open.
        //   item._isActionMenuOpen = false;
        //   // Falsify isSelected attribute for selected folder node. 
        //   if (this._selectedStack.length>0 && this._selectedStack[0].folderId === item._nodeData['folderId']) {
        //     item._nodeData['isSelected'] = false;
        //   }
        // }
        // if (this.updateStack(event)) {
        //   // Emits the list of selected folders to parent component
        //   this.treeItemSelected.emit(this._selectedStack);
        //   this._isNodeActionOpen = false;
        // }
    }
    /**
     * Invokes when any node checked/unchecked. Convenience method to add/remove the node from the selected
     * folders stack.
     * @param source Selected folder node
     */
    updateStack(source) {
        // if (!this.util.isContains(this._selectedStack, source, 'folderId')) {
        //   this._selectedStack = [source];
        //   return true;
        // }
    }
    ngOnDestroy() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreeComponent, selector: "ivory-tree", inputs: { treeRecursive: "treeRecursive", treeData: "treeData", treeNodeSelection: "treeNodeSelection", treeExpandByDefault: "treeExpandByDefault", nodeTitleParam: "nodeTitleParam" }, ngImport: i0, template: "<div class=\"ivory-tree-container\">\n  @if (treeRecursive) {\n    <!-- If the tree is a recursive -->\n    @if (treeData) {\n      <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: treeData }\">\n      </ng-container>\n    }\n    <ng-template #ivoryRecursiveTemplate let-list=\"list\">\n      @for (item of list; track $index) {\n        <ivory-recursivenode\n          [node]=\"item\"\n          [nodeTitle]=\"item[nodeTitleParam]\"\n          [nodeSelectable]=\"treeNodeSelection\"\n          [nodeExpanded]=\"treeExpandByDefault\"\n          (whenNodeSelect)=\"nodeSelectionChange($event)\"\n        >\n        @if (item && item.children && item.children.length > 0) {\n          <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: item.children }\">\n          </ng-container>\n        }\n        </ivory-recursivenode>\n      }\n    </ng-template>\n  }\n  @else {\n    <!-- If the tree is a non-recursive -->\n    <ng-content></ng-content>\n  }  \n</div>\n", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: IvoryRecursivenodeComponent, selector: "ivory-recursivenode", inputs: ["node", "nodeTitle", "nodeSelectable", "nodeExpanded"], outputs: ["whenNodeSelect"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-tree', template: "<div class=\"ivory-tree-container\">\n  @if (treeRecursive) {\n    <!-- If the tree is a recursive -->\n    @if (treeData) {\n      <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: treeData }\">\n      </ng-container>\n    }\n    <ng-template #ivoryRecursiveTemplate let-list=\"list\">\n      @for (item of list; track $index) {\n        <ivory-recursivenode\n          [node]=\"item\"\n          [nodeTitle]=\"item[nodeTitleParam]\"\n          [nodeSelectable]=\"treeNodeSelection\"\n          [nodeExpanded]=\"treeExpandByDefault\"\n          (whenNodeSelect)=\"nodeSelectionChange($event)\"\n        >\n        @if (item && item.children && item.children.length > 0) {\n          <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: item.children }\">\n          </ng-container>\n        }\n        </ivory-recursivenode>\n      }\n    </ng-template>\n  }\n  @else {\n    <!-- If the tree is a non-recursive -->\n    <ng-content></ng-content>\n  }  \n</div>\n", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: () => [], propDecorators: { treeRecursive: [{
                type: Input
            }], treeData: [{
                type: Input
            }], treeNodeSelection: [{
                type: Input
            }], treeExpandByDefault: [{
                type: Input
            }], nodeTitleParam: [{
                type: Input
            }] } });

class IvoryTreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, declarations: [IvoryTreeComponent,
            IvoryTreenodeComponent,
            IvoryRecursivenodeComponent], imports: [BrowserModule,
            FormsModule], exports: [IvoryTreeComponent,
            IvoryTreenodeComponent,
            IvoryRecursivenodeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, imports: [BrowserModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IvoryTreeComponent,
                        IvoryTreenodeComponent,
                        IvoryRecursivenodeComponent
                    ],
                    imports: [
                        BrowserModule,
                        FormsModule
                    ],
                    exports: [
                        IvoryTreeComponent,
                        IvoryTreenodeComponent,
                        IvoryRecursivenodeComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ivory-tree
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IvoryRecursivenodeComponent, IvoryTreeComponent, IvoryTreeModule, IvoryTreenodeComponent };
//# sourceMappingURL=ivoryui-tree.mjs.map
