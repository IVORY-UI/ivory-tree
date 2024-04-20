import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../providers/uniquegen.service";
import * as i2 from "@angular/forms";
export class IvoryRecursivenodeComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryRecursivenodeComponent, deps: [{ token: i1.UniqueIdGeneratorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryRecursivenodeComponent, selector: "ivory-recursivenode", inputs: { node: "node", nodeTitle: "nodeTitle", nodeSelectable: "nodeSelectable", nodeExpanded: "nodeExpanded" }, outputs: { whenNodeSelect: "whenNodeSelect" }, ngImport: i0, template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (node.children && node.children.length>0) {\n        <button (click)=\"_expanded=!_expanded\">\n          @if (!_expanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      @if (nodeSelectable) {\n        <input\n          type=\"checkbox\"\n          id=\"{{_uniqueId}}\"\n          class=\"node-checkbox\"\n          [name]=\"node.name\"\n          (change)=\"nodeSelectionChange($event)\"\n          [(ngModel)]=\"node.isSelected\"\n        />\n        <label for=\"{{_uniqueId}}\">\n          {{ node.name }}\n        </label>\n      }\n      @else {\n        <span>\n          {{ node.name }}\n        </span>\n      }\n    </div>\n  </div>\n  \n  @if (_expanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n", ".ivory-node-title{position:relative;display:flex}.ivory-node-title label{position:relative;display:block;height:2rem;padding-left:1.75rem;margin-top:0;color:#22343c;line-height:2rem;cursor:pointer}.ivory-node-title input[type=checkbox]{position:absolute;opacity:0;top:.125rem;left:.125rem;height:.66667rem;width:.66667rem}.ivory-node-title input[type=checkbox]+label:before{position:absolute;top:.5rem;left:.2rem;content:\"\";display:inline-block;height:1rem;width:1rem;border:1px solid #999;border-radius:.125rem}.ivory-node-title input[type=checkbox]+label:after{position:absolute;content:\"\";display:none;height:.35rem;width:.6rem;border-left:.18rem solid #fff;border-bottom:.18rem solid #fff;top:.6rem;left:.4rem;-webkit-transform:translate(0,.16666675rem) rotate(-45deg);transform:translateY(.16666675rem) rotate(-45deg)}.ivory-node-title input[type=checkbox]:checked+label:before{background:#0077b8;border:none}.ivory-node-title input[type=checkbox]:checked+label:after{display:inline-block}.ivory-node-title input[type=checkbox]:focus+label:before{outline:0;box-shadow:0 0 2px 2px #69c0e2}.ivory-node-title input[type=checkbox]:disabled{cursor:not-allowed}.ivory-node-title input[type=checkbox]:disabled+label:before{background-color:#ccc;border:none;cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: i2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryRecursivenodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-recursivenode', template: "<div class=\"ivory-node\">\n  <div class=\"ivory-node-content\">\n    <div class=\"ivory-node-expand\">\n      @if (node.children && node.children.length>0) {\n        <button (click)=\"_expanded=!_expanded\">\n          @if (!_expanded) {\n            <div class=\"ivory-icon-collapse\"></div>\n          }\n          @else {\n            <div class=\"ivory-icon-expand\"></div>\n          }\n        </button>\n      }\n    </div>\n    <div class=\"ivory-node-title\">\n      @if (nodeSelectable) {\n        <input\n          type=\"checkbox\"\n          id=\"{{_uniqueId}}\"\n          class=\"node-checkbox\"\n          [name]=\"node.name\"\n          (change)=\"nodeSelectionChange($event)\"\n          [(ngModel)]=\"node.isSelected\"\n        />\n        <label for=\"{{_uniqueId}}\">\n          {{ node.name }}\n        </label>\n      }\n      @else {\n        <span>\n          {{ node.name }}\n        </span>\n      }\n    </div>\n  </div>\n  \n  @if (_expanded) {\n    <div class=\"ivory-node-children\">\n      <ng-content></ng-content>\n    </div>\n  }\n</div>\n", styles: [".ivory-node-content{display:flex;flex:1 1 auto;align-items:center;line-height:2rem}.ivory-node-content:hover{background-color:#f1f3f5;border-radius:.25rem}.ivory-node-expand{position:relative;display:flex;flex:0 0 2rem;justify-content:center;align-items:center;padding:0;margin:0;height:2rem;width:2rem;color:#999}.ivory-node-expand button{border:none;background:none;padding:0;margin:0;height:.5rem;width:.5rem;cursor:pointer}.ivory-node-children{margin-left:2rem}.ivory-icon-expand{width:0;height:0;border-left:.25rem solid transparent;border-right:.25rem solid transparent;border-top:.4rem solid #000000}.ivory-icon-collapse{width:0;height:0;border-top:.25rem solid transparent;border-left:.4rem solid #000000;border-bottom:.25rem solid transparent}\n", ".ivory-node-title{position:relative;display:flex}.ivory-node-title label{position:relative;display:block;height:2rem;padding-left:1.75rem;margin-top:0;color:#22343c;line-height:2rem;cursor:pointer}.ivory-node-title input[type=checkbox]{position:absolute;opacity:0;top:.125rem;left:.125rem;height:.66667rem;width:.66667rem}.ivory-node-title input[type=checkbox]+label:before{position:absolute;top:.5rem;left:.2rem;content:\"\";display:inline-block;height:1rem;width:1rem;border:1px solid #999;border-radius:.125rem}.ivory-node-title input[type=checkbox]+label:after{position:absolute;content:\"\";display:none;height:.35rem;width:.6rem;border-left:.18rem solid #fff;border-bottom:.18rem solid #fff;top:.6rem;left:.4rem;-webkit-transform:translate(0,.16666675rem) rotate(-45deg);transform:translateY(.16666675rem) rotate(-45deg)}.ivory-node-title input[type=checkbox]:checked+label:before{background:#0077b8;border:none}.ivory-node-title input[type=checkbox]:checked+label:after{display:inline-block}.ivory-node-title input[type=checkbox]:focus+label:before{outline:0;box-shadow:0 0 2px 2px #69c0e2}.ivory-node-title input[type=checkbox]:disabled{cursor:not-allowed}.ivory-node-title input[type=checkbox]:disabled+label:before{background-color:#ccc;border:none;cursor:not-allowed}\n"] }]
        }], ctorParameters: () => [{ type: i1.UniqueIdGeneratorService }], propDecorators: { node: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktcmVjdXJzaXZlbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktcmVjdXJzaXZlbm9kZS9pdm9yeS1yZWN1cnNpdmVub2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2l2b3J5LXRyZWUvc3JjL2xpYi9pdm9yeS1yZWN1cnNpdmVub2RlL2l2b3J5LXJlY3Vyc2l2ZW5vZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTMUYsTUFBTSxPQUFPLDJCQUEyQjtJQU90QyxJQUNJLElBQUksQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBSUQsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBR00saUJBQWlCLENBQUMsTUFBVztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQ1MsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBL0IzQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBa0J6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQU8vQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFRNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQVU7UUFDNUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFRCx1QkFBdUI7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxXQUFXO0lBRVgsQ0FBQzs4R0EvRFUsMkJBQTJCO2tHQUEzQiwyQkFBMkIsNE5DVHhDLHNqQ0EwQ0E7OzJGRGpDYSwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UscUJBQXFCOzZGQVkzQixJQUFJO3NCQURQLEtBQUs7Z0JBU0YsU0FBUztzQkFEWixLQUFLO2dCQVFHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBR0YsWUFBWTtzQkFEZixLQUFLO2dCQUtJLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVW5pcXVlSWRHZW5lcmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3VuaXF1ZWdlbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXZvcnktcmVjdXJzaXZlbm9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdm9yeS1yZWN1cnNpdmVub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9pdm9yeS1ub2RlLnNjc3MnLCAnLi9pdm9yeS1yZWN1cnNpdmVub2RlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXZvcnlSZWN1cnNpdmVub2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBfbm9kZTogYW55O1xuICBwdWJsaWMgX3RpdGxlOiBhbnk7XG4gIHB1YmxpYyBfdW5pcXVlSWQ6IGFueTtcbiAgcHVibGljIF9leHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIFxuICBzZXQgbm9kZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbm9kZSA9IHZhbHVlO1xuICB9XG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG5vZGVUaXRsZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuICBnZXQgbm9kZVRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG5vZGVTZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgXG4gIHNldCBub2RlRXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmRlZCA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHdoZW5Ob2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgZW1pdE5vZGVTZWxlY3Rpb24oc3RhdHVzOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLndoZW5Ob2RlU2VsZWN0LmVtaXQodGhpcy5fbm9kZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdW5pcXVlSWRTZXJ2aWNlOiBVbmlxdWVJZEdlbmVyYXRvclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fdW5pcXVlSWQgPSB0aGlzLnVuaXF1ZUlkU2VydmljZS5nZXRVbmlxdWVJZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxuICBub2RlU2VsZWN0aW9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9ub2RlLmlzU2VsZWN0ZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICBpZiAodGhpcy5fbm9kZS5jaGlsZHJlbiAmJiB0aGlzLl9ub2RlLmNoaWxkcmVuLmxlbmd0aD4wKSB7XG4gICAgICB0aGlzLmltcGFjdENoaWxkcmVuU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuZW1pdE5vZGVTZWxlY3Rpb24oZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIFxuICB9XG5cbiAgaW1wYWN0Q2hpbGRyZW5TZWxlY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuX25vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX25vZGUuY2hpbGRyZW5baV1bJ2lzU2VsZWN0ZWQnXSA9IHRoaXMuX25vZGUuaXNTZWxlY3RlZDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZVwiPlxuICA8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZS1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cIml2b3J5LW5vZGUtZXhwYW5kXCI+XG4gICAgICBAaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGg+MCkge1xuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJfZXhwYW5kZWQ9IV9leHBhbmRlZFwiPlxuICAgICAgICAgIEBpZiAoIV9leHBhbmRlZCkge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml2b3J5LWljb24tY29sbGFwc2VcIj48L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGVsc2Uge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml2b3J5LWljb24tZXhwYW5kXCI+PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZS10aXRsZVwiPlxuICAgICAgQGlmIChub2RlU2VsZWN0YWJsZSkge1xuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPVwie3tfdW5pcXVlSWR9fVwiXG4gICAgICAgICAgY2xhc3M9XCJub2RlLWNoZWNrYm94XCJcbiAgICAgICAgICBbbmFtZV09XCJub2RlLm5hbWVcIlxuICAgICAgICAgIChjaGFuZ2UpPVwibm9kZVNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cIm5vZGUuaXNTZWxlY3RlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e191bmlxdWVJZH19XCI+XG4gICAgICAgICAge3sgbm9kZS5uYW1lIH19XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHt7IG5vZGUubmFtZSB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgQGlmIChfZXhwYW5kZWQpIHtcbiAgICA8ZGl2IGNsYXNzPVwiaXZvcnktbm9kZS1jaGlsZHJlblwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICB9XG48L2Rpdj5cbiJdfQ==