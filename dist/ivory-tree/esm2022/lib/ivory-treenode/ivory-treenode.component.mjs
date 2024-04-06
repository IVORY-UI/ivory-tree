import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IvoryTreenodeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktdHJlZW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXZvcnktdHJlZS9zcmMvbGliL2l2b3J5LXRyZWVub2RlL2l2b3J5LXRyZWVub2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2l2b3J5LXRyZWUvc3JjL2xpYi9pdm9yeS10cmVlbm9kZS9pdm9yeS10cmVlbm9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzFGLE1BQU0sT0FBTyxzQkFBc0I7SUFLakMsSUFDSSxJQUFJLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFRRDtRQU5TLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRS9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVoQixRQUFRO0lBRVIsQ0FBQztJQUVELFdBQVc7SUFFWCxDQUFDOzhHQXBDVSxzQkFBc0I7a0dBQXRCLHNCQUFzQiwyTkNQbkMscW1DQXFDQTs7MkZEOUJhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxnQkFBZ0I7d0RBVXRCLElBQUk7c0JBRFAsS0FBSztnQkFVRixTQUFTO3NCQURaLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNO2dCQUVHLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXZvcnktdHJlZW5vZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaXZvcnktdHJlZW5vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vaXZvcnktdHJlZW5vZGUuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIEl2b3J5VHJlZW5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIF9ub2RlOiBhbnk7XG4gIHB1YmxpYyBfdGl0bGU6IGFueTtcblxuICBASW5wdXQoKSBcbiAgc2V0IG5vZGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX25vZGUgPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnaGFzIGNoaWxkcmVuIC0+ICcsIHRoaXMuX25vZGUuY2hpbGRyZW4pO1xuICB9XG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5vZGVUaXRsZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9kZVRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGlzTm9kZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHdoZW5Ob2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSB3aGVuTm9kZUV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIFxuICB9XG5cbn1cbiIsIlxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5VHJlZU5vZGVUZW1wbGF0ZTsgY29udGV4dDp7bm9kZTpfbm9kZX1cIj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2l2b3J5VHJlZU5vZGVUZW1wbGF0ZSBsZXQtbm9kZT1cIm5vZGVcIj5cbiAgPGRpdiBjbGFzcz1cIml2b3J5LXRyZWVub2RlXCI+XG4gICAgPGRpdiBjbGFzcz1cIml2b3J5LXRyZWVub2RlLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdm9yeS10cmVlbm9kZS1leHBhbmRcIj5cbiAgICAgICAgQGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoPjApIHtcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJub2RlLmNvbGxhcHNlZD0hbm9kZS5jb2xsYXBzZWQ7XCI+XG4gICAgICAgICAgICBAaWYgKCFub2RlLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXZvcnktaWNvbi1leHBhbmRcIj48L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBlbHNlIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml2b3J5LWljb24tY29sbGFwc2VcIj48L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXZvcnktdHJlZW5vZGUtc2VsZWN0XCI+XG4gICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdm9yeS10cmVlbm9kZS10aXRsZVwiPlxuICAgICAgICB7eyBub2RlLm5hbWUgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIEBpZiAoIW5vZGUuY29sbGFwc2VkKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiaXZvcnktdHJlZW5vZGUtY2hpbGRyZW5cIj5cbiAgICAgICAgQGZvciAoY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5VHJlZU5vZGVUZW1wbGF0ZTsgY29udGV4dDp7bm9kZTpjaGlsZH1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=