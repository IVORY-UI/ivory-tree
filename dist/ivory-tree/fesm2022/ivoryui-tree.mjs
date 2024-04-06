import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class IvoryTreenodeComponent {
    set node(value) {
        this._node = value;
        console.log('has children -> ', this._node.children);
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
    constructor() {
        this.isNodeDisabled = false;
        this.whenNodeSelect = new EventEmitter();
        this.whenNodeExpand = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreenodeComponent, selector: "ivory-treenode", inputs: { node: "node", nodeTitle: "nodeTitle", isNodeDisabled: "isNodeDisabled" }, outputs: { whenNodeSelect: "whenNodeSelect", whenNodeExpand: "whenNodeExpand" }, ngImport: i0, template: "\n<ng-container *ngTemplateOutlet=\"ivoryTreeNodeTemplate; context:{node:_node}\">\n</ng-container>\n\n<ng-template #ivoryTreeNodeTemplate let-node=\"node\">\n  <div class=\"ivory-treenode\">\n    <div class=\"ivory-treenode-content\">\n      <div class=\"ivory-treenode-expand\">\n        @if (node.children && node.children.length>0) {\n          <button (click)=\"node.collapsed=!node.collapsed;\">\n            @if (!node.collapsed) {\n              <div class=\"ivory-icon-expand\"></div>\n            }\n            @else {\n              <div class=\"ivory-icon-collapse\"></div>\n            }\n          </button>\n        }\n      </div>\n      <div class=\"ivory-treenode-select\">\n    \n      </div>\n      <div class=\"ivory-treenode-title\">\n        {{ node.name }}\n      </div>\n    </div>\n    \n    @if (!node.collapsed) {\n      <div class=\"ivory-treenode-children\">\n        @for (child of node.children; track $index) {\n          <ng-container *ngTemplateOutlet=\"ivoryTreeNodeTemplate; context:{node:child}\">\n          </ng-container>\n        }\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: [".ivory-treenode-content{display:flex;flex:1 1 auto;align-items:center;border-radius:.125rem 0 0 .125rem;line-height:2rem}.ivory-treenode-content:hover{background-color:#ededed}.ivory-treenode-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-treenode-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-treenode-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.5rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.5rem solid #000000;border-bottom:.25rem solid transparent}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-treenode', template: "\n<ng-container *ngTemplateOutlet=\"ivoryTreeNodeTemplate; context:{node:_node}\">\n</ng-container>\n\n<ng-template #ivoryTreeNodeTemplate let-node=\"node\">\n  <div class=\"ivory-treenode\">\n    <div class=\"ivory-treenode-content\">\n      <div class=\"ivory-treenode-expand\">\n        @if (node.children && node.children.length>0) {\n          <button (click)=\"node.collapsed=!node.collapsed;\">\n            @if (!node.collapsed) {\n              <div class=\"ivory-icon-expand\"></div>\n            }\n            @else {\n              <div class=\"ivory-icon-collapse\"></div>\n            }\n          </button>\n        }\n      </div>\n      <div class=\"ivory-treenode-select\">\n    \n      </div>\n      <div class=\"ivory-treenode-title\">\n        {{ node.name }}\n      </div>\n    </div>\n    \n    @if (!node.collapsed) {\n      <div class=\"ivory-treenode-children\">\n        @for (child of node.children; track $index) {\n          <ng-container *ngTemplateOutlet=\"ivoryTreeNodeTemplate; context:{node:child}\">\n          </ng-container>\n        }\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: [".ivory-treenode-content{display:flex;flex:1 1 auto;align-items:center;border-radius:.125rem 0 0 .125rem;line-height:2rem}.ivory-treenode-content:hover{background-color:#ededed}.ivory-treenode-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-treenode-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-treenode-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.5rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.5rem solid #000000;border-bottom:.25rem solid transparent}\n"] }]
        }], ctorParameters: () => [], propDecorators: { node: [{
                type: Input
            }], nodeTitle: [{
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
        this.hasNodeSelection = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.3", type: IvoryTreeComponent, selector: "ivory-tree", inputs: { hasNodeSelection: "hasNodeSelection" }, ngImport: i0, template: "<div class=\"ivory-tree-container\">\n  <ng-content></ng-content>\n</div>", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-tree', template: "<div class=\"ivory-tree-container\">\n  <ng-content></ng-content>\n</div>", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: () => [], propDecorators: { hasNodeSelection: [{
                type: Input
            }] } });

/* Directives */
class IvoryTreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, declarations: [IvoryTreeComponent,
            IvoryTreenodeComponent], imports: [BrowserModule], exports: [IvoryTreeComponent,
            IvoryTreenodeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, imports: [BrowserModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        IvoryTreeComponent,
                        IvoryTreenodeComponent
                    ],
                    imports: [
                        BrowserModule
                    ],
                    exports: [
                        IvoryTreeComponent,
                        IvoryTreenodeComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ivory-tree
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IvoryTreeComponent, IvoryTreeModule, IvoryTreenodeComponent };
//# sourceMappingURL=ivoryui-tree.mjs.map
