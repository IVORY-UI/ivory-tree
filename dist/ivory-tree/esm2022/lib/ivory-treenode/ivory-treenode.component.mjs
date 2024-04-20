import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class IvoryTreenodeComponent {
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
    set nodeTitle(value) {
        this._title = value;
    }
    get nodeTitle() {
        return this._title;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreenodeComponent, selector: "ivory-treenode", inputs: { node: "node", nodeExpanded: "nodeExpanded", nodeHasChildren: "nodeHasChildren", nodeTitle: "nodeTitle", isNodeDisabled: "isNodeDisabled" }, outputs: { whenNodeSelect: "whenNodeSelect", whenNodeExpand: "whenNodeExpand" }, ngImport: i0, template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (nodeHasChildren) {\n        <button (click)=\"_isExpanded=!_isExpanded\">\n          @if (!_isExpanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      {{ _title }}\n    </div>\n  </div>\n  @if (nodeHasChildren && _isExpanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreenodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-treenode', template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (nodeHasChildren) {\n        <button (click)=\"_isExpanded=!_isExpanded\">\n          @if (!_isExpanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      {{ _title }}\n    </div>\n  </div>\n  @if (nodeHasChildren && _isExpanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n"] }]
        }], propDecorators: { node: [{
                type: Input
            }], nodeExpanded: [{
                type: Input
            }], nodeHasChildren: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktdHJlZW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaXZvcnktdHJlZS9zcmMvbGliL2l2b3J5LXRyZWVub2RlL2l2b3J5LXRyZWVub2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2l2b3J5LXRyZWUvc3JjL2xpYi9pdm9yeS10cmVlbm9kZS9pdm9yeS10cmVlbm9kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBU1MsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFlMUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFVakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUcvQztJQTlCQyxJQUNJLElBQUksQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVGLElBQ0ksWUFBWSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUlBLElBQ0ksU0FBUyxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzhHQTNCVSxzQkFBc0I7a0dBQXRCLHNCQUFzQiw2UkNQbkMsK25CQXdCQTs7MkZEakJhLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxnQkFBZ0I7OEJBV3RCLElBQUk7c0JBRFAsS0FBSztnQkFTSCxZQUFZO3NCQURmLEtBQUs7Z0JBS0ksZUFBZTtzQkFBdkIsS0FBSztnQkFHRixTQUFTO3NCQURaLEtBQUs7Z0JBUUcsY0FBYztzQkFBdEIsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNO2dCQUVHLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdm9yeS10cmVlbm9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdm9yeS10cmVlbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvaXZvcnktbm9kZS5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXZvcnlUcmVlbm9kZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIF9ub2RlOiBhbnk7XG4gIHB1YmxpYyBfdGl0bGU6IGFueTtcbiAgcHVibGljIF9pc0V4cGFuZGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBcbiAgc2V0IG5vZGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX25vZGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgfVxuXG4gQElucHV0KCkgXG4gc2V0IG5vZGVFeHBhbmRlZCh2YWx1ZTogYW55KSB7XG4gIHRoaXMuX2lzRXhwYW5kZWQgPSB2YWx1ZTtcbiB9XG5cbiAgQElucHV0KCkgbm9kZUhhc0NoaWxkcmVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG5vZGVUaXRsZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9kZVRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGlzTm9kZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHdoZW5Ob2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSB3aGVuTm9kZUV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZVwiPlxuICA8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZS1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cIml2b3J5LW5vZGUtZXhwYW5kXCI+XG4gICAgICBAaWYgKG5vZGVIYXNDaGlsZHJlbikge1xuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJfaXNFeHBhbmRlZD0hX2lzRXhwYW5kZWRcIj5cbiAgICAgICAgICBAaWYgKCFfaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml2b3J5LWljb24tY29sbGFwc2VcIj48L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml2b3J5LWljb24tZXhwYW5kXCI+PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZS10aXRsZVwiPlxuICAgICAge3sgX3RpdGxlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBAaWYgKG5vZGVIYXNDaGlsZHJlbiAmJiBfaXNFeHBhbmRlZCkge1xuICAgIDxkaXYgY2xhc3M9XCJpdm9yeS1ub2RlLWNoaWxkcmVuXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19