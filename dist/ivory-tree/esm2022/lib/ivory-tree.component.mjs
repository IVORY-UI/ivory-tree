import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ivory-recursivenode/ivory-recursivenode.component";
export class IvoryTreeComponent {
    constructor() {
        this.treeRecursive = false;
        this.treeSelectable = false;
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreeComponent, selector: "ivory-tree", inputs: { treeRecursive: "treeRecursive", treeData: "treeData", treeSelectable: "treeSelectable", treeExpandByDefault: "treeExpandByDefault", nodeTitleParam: "nodeTitleParam" }, ngImport: i0, template: "<div class=\"ivory-tree-container\">\n  \n  @if (treeRecursive) {\n    <!-- If the tree is a recursive -->\n    @if (treeData) {\n      <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: treeData }\">\n      </ng-container>\n    }\n    \n    <ng-template #ivoryRecursiveTemplate let-list=\"list\">\n      @for (item of list; track $index) {\n        <ivory-recursivenode\n          [node]=\"item\"\n          [nodeTitle]=\"item[nodeTitleParam]\"\n          [nodeSelectable]=\"treeSelectable\"\n          [nodeExpanded]=\"treeExpandByDefault\"\n          (whenNodeSelect)=\"nodeSelectionChange($event)\"\n        >\n        @if (item && item.children && item.children.length > 0) {\n          <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: item.children }\">\n          </ng-container>\n        }\n        </ivory-recursivenode>\n      }\n    </ng-template>\n  }\n  @else {\n    <!-- If the tree is a non-recursive -->\n    <ng-content></ng-content>\n  }  \n</div>\n", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.IvoryRecursivenodeComponent, selector: "ivory-recursivenode", inputs: ["node", "nodeTitle", "nodeSelectable", "nodeExpanded"], outputs: ["whenNodeSelect"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ivory-tree', template: "<div class=\"ivory-tree-container\">\n  \n  @if (treeRecursive) {\n    <!-- If the tree is a recursive -->\n    @if (treeData) {\n      <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: treeData }\">\n      </ng-container>\n    }\n    \n    <ng-template #ivoryRecursiveTemplate let-list=\"list\">\n      @for (item of list; track $index) {\n        <ivory-recursivenode\n          [node]=\"item\"\n          [nodeTitle]=\"item[nodeTitleParam]\"\n          [nodeSelectable]=\"treeSelectable\"\n          [nodeExpanded]=\"treeExpandByDefault\"\n          (whenNodeSelect)=\"nodeSelectionChange($event)\"\n        >\n        @if (item && item.children && item.children.length > 0) {\n          <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: item.children }\">\n          </ng-container>\n        }\n        </ivory-recursivenode>\n      }\n    </ng-template>\n  }\n  @else {\n    <!-- If the tree is a non-recursive -->\n    <ng-content></ng-content>\n  }  \n</div>\n", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: () => [], propDecorators: { treeRecursive: [{
                type: Input
            }], treeData: [{
                type: Input
            }], treeSelectable: [{
                type: Input
            }], treeExpandByDefault: [{
                type: Input
            }], nodeTitleParam: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPcEUsTUFBTSxPQUFPLGtCQUFrQjtJQVk3QjtRQVZTLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRWhDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUVyQyxtQkFBYyxHQUFXLEVBQUUsQ0FBQztJQUdsQyxDQUFDO0lBRUosUUFBUTtJQUVSLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMscURBQXFEO1FBQ3JELDBDQUEwQztRQUMxQyxvQ0FBb0M7UUFDcEMsK0RBQStEO1FBQy9ELDBHQUEwRztRQUMxRyw0Q0FBNEM7UUFDNUMsTUFBTTtRQUNOLElBQUk7UUFDSixpQ0FBaUM7UUFDakMsOERBQThEO1FBQzlELHFEQUFxRDtRQUNyRCxvQ0FBb0M7UUFDcEMsSUFBSTtJQUNOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLE1BQVc7UUFDckIsd0VBQXdFO1FBQ3hFLG9DQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsSUFBSTtJQUNOLENBQUM7SUFHRCxXQUFXO0lBRVgsQ0FBQzs4R0F2RFUsa0JBQWtCO2tHQUFsQixrQkFBa0Isb09DUC9CLHkvQkErQkE7OzJGRHhCYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsWUFBWTt3REFNYixhQUFhO3NCQUFyQixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsY0FBYztzQkFBdEIsS0FBSztnQkFFRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBRUcsY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l2b3J5LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaXZvcnktdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9pdm9yeS10cmVlLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBJdm9yeVRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgdHJlZVJlY3Vyc2l2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHRyZWVEYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgdHJlZVNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB0cmVlRXhwYW5kQnlEZWZhdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbm9kZVRpdGxlUGFyYW06IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyB3aGVuIGFueSBub2RlIGNoZWNrYm94IHNlbGVjdGVkL3Vuc2VsZWN0ZWQgYW5kIG1haW50YWlucyB0aGUgcGlsZSBvZiBzZWxlY3RlZCBub2Rlcy5cbiAgICogQHBhcmFtIGV2ZW50IENoYW5nZSBldmVudFxuICAgKi9cbiAgbm9kZVNlbGVjdGlvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIG5vZGUgLT4gJywgZXZlbnQpO1xuICAgIC8vIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNoaWxkVHJlZU5vZGUudG9BcnJheSgpKSB7XG4gICAgLy8gICAvLyBDbG9zZSBhY3Rpb24gbWVudSBpZiBhbHJlYWR5IG9wZW4uXG4gICAgLy8gICBpdGVtLl9pc0FjdGlvbk1lbnVPcGVuID0gZmFsc2U7XG4gICAgLy8gICAvLyBGYWxzaWZ5IGlzU2VsZWN0ZWQgYXR0cmlidXRlIGZvciBzZWxlY3RlZCBmb2xkZXIgbm9kZS4gXG4gICAgLy8gICBpZiAodGhpcy5fc2VsZWN0ZWRTdGFjay5sZW5ndGg+MCAmJiB0aGlzLl9zZWxlY3RlZFN0YWNrWzBdLmZvbGRlcklkID09PSBpdGVtLl9ub2RlRGF0YVsnZm9sZGVySWQnXSkge1xuICAgIC8vICAgICBpdGVtLl9ub2RlRGF0YVsnaXNTZWxlY3RlZCddID0gZmFsc2U7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGlmICh0aGlzLnVwZGF0ZVN0YWNrKGV2ZW50KSkge1xuICAgIC8vICAgLy8gRW1pdHMgdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgZm9sZGVycyB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgLy8gICB0aGlzLnRyZWVJdGVtU2VsZWN0ZWQuZW1pdCh0aGlzLl9zZWxlY3RlZFN0YWNrKTtcbiAgICAvLyAgIHRoaXMuX2lzTm9kZUFjdGlvbk9wZW4gPSBmYWxzZTtcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyB3aGVuIGFueSBub2RlIGNoZWNrZWQvdW5jaGVja2VkLiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYWRkL3JlbW92ZSB0aGUgbm9kZSBmcm9tIHRoZSBzZWxlY3RlZFxuICAgKiBmb2xkZXJzIHN0YWNrLlxuICAgKiBAcGFyYW0gc291cmNlIFNlbGVjdGVkIGZvbGRlciBub2RlXG4gICAqL1xuICB1cGRhdGVTdGFjayhzb3VyY2U6IGFueSkge1xuICAgIC8vIGlmICghdGhpcy51dGlsLmlzQ29udGFpbnModGhpcy5fc2VsZWN0ZWRTdGFjaywgc291cmNlLCAnZm9sZGVySWQnKSkge1xuICAgIC8vICAgdGhpcy5fc2VsZWN0ZWRTdGFjayA9IFtzb3VyY2VdO1xuICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgLy8gfVxuICB9XG5cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaXZvcnktdHJlZS1jb250YWluZXJcIj5cbiAgXG4gIEBpZiAodHJlZVJlY3Vyc2l2ZSkge1xuICAgIDwhLS0gSWYgdGhlIHRyZWUgaXMgYSByZWN1cnNpdmUgLS0+XG4gICAgQGlmICh0cmVlRGF0YSkge1xuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5UmVjdXJzaXZlVGVtcGxhdGU7IGNvbnRleHQ6eyBsaXN0OiB0cmVlRGF0YSB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICB9XG4gICAgXG4gICAgPG5nLXRlbXBsYXRlICNpdm9yeVJlY3Vyc2l2ZVRlbXBsYXRlIGxldC1saXN0PVwibGlzdFwiPlxuICAgICAgQGZvciAoaXRlbSBvZiBsaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgPGl2b3J5LXJlY3Vyc2l2ZW5vZGVcbiAgICAgICAgICBbbm9kZV09XCJpdGVtXCJcbiAgICAgICAgICBbbm9kZVRpdGxlXT1cIml0ZW1bbm9kZVRpdGxlUGFyYW1dXCJcbiAgICAgICAgICBbbm9kZVNlbGVjdGFibGVdPVwidHJlZVNlbGVjdGFibGVcIlxuICAgICAgICAgIFtub2RlRXhwYW5kZWRdPVwidHJlZUV4cGFuZEJ5RGVmYXVsdFwiXG4gICAgICAgICAgKHdoZW5Ob2RlU2VsZWN0KT1cIm5vZGVTZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgQGlmIChpdGVtICYmIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5UmVjdXJzaXZlVGVtcGxhdGU7IGNvbnRleHQ6eyBsaXN0OiBpdGVtLmNoaWxkcmVuIH1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgfVxuICAgICAgICA8L2l2b3J5LXJlY3Vyc2l2ZW5vZGU+XG4gICAgICB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAZWxzZSB7XG4gICAgPCEtLSBJZiB0aGUgdHJlZSBpcyBhIG5vbi1yZWN1cnNpdmUgLS0+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICB9ICBcbjwvZGl2PlxuIl19