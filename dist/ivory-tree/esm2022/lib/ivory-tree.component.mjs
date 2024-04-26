import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ivory-recursivenode/ivory-recursivenode.component";
export class IvoryTreeComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.3", type: IvoryTreeComponent, selector: "ivory-tree", inputs: { treeRecursive: "treeRecursive", treeData: "treeData", treeNodeSelection: "treeNodeSelection", treeExpandByDefault: "treeExpandByDefault", nodeTitleParam: "nodeTitleParam" }, ngImport: i0, template: "<div class=\"ivory-tree-container\">\n  @if (treeRecursive) {\n    <!-- If the tree is a recursive -->\n    @if (treeData) {\n      <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: treeData }\">\n      </ng-container>\n    }\n    <ng-template #ivoryRecursiveTemplate let-list=\"list\">\n      @for (item of list; track $index) {\n        <ivory-recursivenode\n          [node]=\"item\"\n          [nodeTitle]=\"item[nodeTitleParam]\"\n          [nodeSelectable]=\"treeNodeSelection\"\n          [nodeExpanded]=\"treeExpandByDefault\"\n          (whenNodeSelect)=\"nodeSelectionChange($event)\"\n        >\n        @if (item && item.children && item.children.length > 0) {\n          <ng-container *ngTemplateOutlet=\"ivoryRecursiveTemplate; context:{ list: item.children }\">\n          </ng-container>\n        }\n        </ivory-recursivenode>\n      }\n    </ng-template>\n  }\n  @else {\n    <!-- If the tree is a non-recursive -->\n    <ng-content></ng-content>\n  }  \n</div>\n", styles: [".ivory-tree-container{display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.IvoryRecursivenodeComponent, selector: "ivory-recursivenode", inputs: ["node", "nodeTitle", "nodeSelectable", "nodeExpanded"], outputs: ["whenNodeSelect"] }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZcEUsTUFBTSxPQUFPLGtCQUFrQjtJQVk3QjtRQVZTLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUVuQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFckMsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFHbEMsQ0FBQztJQUVKLFFBQVE7SUFFUixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUJBQW1CLENBQUMsS0FBVTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLHFEQUFxRDtRQUNyRCwwQ0FBMEM7UUFDMUMsb0NBQW9DO1FBQ3BDLCtEQUErRDtRQUMvRCwwR0FBMEc7UUFDMUcsNENBQTRDO1FBQzVDLE1BQU07UUFDTixJQUFJO1FBQ0osaUNBQWlDO1FBQ2pDLDhEQUE4RDtRQUM5RCxxREFBcUQ7UUFDckQsb0NBQW9DO1FBQ3BDLElBQUk7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxNQUFXO1FBQ3JCLHdFQUF3RTtRQUN4RSxvQ0FBb0M7UUFDcEMsaUJBQWlCO1FBQ2pCLElBQUk7SUFDTixDQUFDO0lBR0QsV0FBVztJQUVYLENBQUM7OEdBdkRVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLDBPQ1ovQixrL0JBNkJBOzsyRkRqQmEsa0JBQWtCO2tCQVY5QixTQUFTOytCQUNFLFlBQVk7d0RBV2IsYUFBYTtzQkFBckIsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBRUcsY0FBYztzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l2b3J5LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaXZvcnktdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogYFxuICAgIC5pdm9yeS10cmVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSXZvcnlUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHRyZWVSZWN1cnNpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB0cmVlRGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIHRyZWVOb2RlU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdHJlZUV4cGFuZEJ5RGVmYXVsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG5vZGVUaXRsZVBhcmFtOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgd2hlbiBhbnkgbm9kZSBjaGVja2JveCBzZWxlY3RlZC91bnNlbGVjdGVkIGFuZCBtYWludGFpbnMgdGhlIHBpbGUgb2Ygc2VsZWN0ZWQgbm9kZXMuXG4gICAqIEBwYXJhbSBldmVudCBDaGFuZ2UgZXZlbnRcbiAgICovXG4gIG5vZGVTZWxlY3Rpb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBub2RlIC0+ICcsIGV2ZW50KTtcbiAgICAvLyBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jaGlsZFRyZWVOb2RlLnRvQXJyYXkoKSkge1xuICAgIC8vICAgLy8gQ2xvc2UgYWN0aW9uIG1lbnUgaWYgYWxyZWFkeSBvcGVuLlxuICAgIC8vICAgaXRlbS5faXNBY3Rpb25NZW51T3BlbiA9IGZhbHNlO1xuICAgIC8vICAgLy8gRmFsc2lmeSBpc1NlbGVjdGVkIGF0dHJpYnV0ZSBmb3Igc2VsZWN0ZWQgZm9sZGVyIG5vZGUuIFxuICAgIC8vICAgaWYgKHRoaXMuX3NlbGVjdGVkU3RhY2subGVuZ3RoPjAgJiYgdGhpcy5fc2VsZWN0ZWRTdGFja1swXS5mb2xkZXJJZCA9PT0gaXRlbS5fbm9kZURhdGFbJ2ZvbGRlcklkJ10pIHtcbiAgICAvLyAgICAgaXRlbS5fbm9kZURhdGFbJ2lzU2VsZWN0ZWQnXSA9IGZhbHNlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy51cGRhdGVTdGFjayhldmVudCkpIHtcbiAgICAvLyAgIC8vIEVtaXRzIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGZvbGRlcnMgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgIC8vICAgdGhpcy50cmVlSXRlbVNlbGVjdGVkLmVtaXQodGhpcy5fc2VsZWN0ZWRTdGFjayk7XG4gICAgLy8gICB0aGlzLl9pc05vZGVBY3Rpb25PcGVuID0gZmFsc2U7XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgd2hlbiBhbnkgbm9kZSBjaGVja2VkL3VuY2hlY2tlZC4gQ29udmVuaWVuY2UgbWV0aG9kIHRvIGFkZC9yZW1vdmUgdGhlIG5vZGUgZnJvbSB0aGUgc2VsZWN0ZWRcbiAgICogZm9sZGVycyBzdGFjay5cbiAgICogQHBhcmFtIHNvdXJjZSBTZWxlY3RlZCBmb2xkZXIgbm9kZVxuICAgKi9cbiAgdXBkYXRlU3RhY2soc291cmNlOiBhbnkpIHtcbiAgICAvLyBpZiAoIXRoaXMudXRpbC5pc0NvbnRhaW5zKHRoaXMuX3NlbGVjdGVkU3RhY2ssIHNvdXJjZSwgJ2ZvbGRlcklkJykpIHtcbiAgICAvLyAgIHRoaXMuX3NlbGVjdGVkU3RhY2sgPSBbc291cmNlXTtcbiAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIml2b3J5LXRyZWUtY29udGFpbmVyXCI+XG4gIEBpZiAodHJlZVJlY3Vyc2l2ZSkge1xuICAgIDwhLS0gSWYgdGhlIHRyZWUgaXMgYSByZWN1cnNpdmUgLS0+XG4gICAgQGlmICh0cmVlRGF0YSkge1xuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5UmVjdXJzaXZlVGVtcGxhdGU7IGNvbnRleHQ6eyBsaXN0OiB0cmVlRGF0YSB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICB9XG4gICAgPG5nLXRlbXBsYXRlICNpdm9yeVJlY3Vyc2l2ZVRlbXBsYXRlIGxldC1saXN0PVwibGlzdFwiPlxuICAgICAgQGZvciAoaXRlbSBvZiBsaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgPGl2b3J5LXJlY3Vyc2l2ZW5vZGVcbiAgICAgICAgICBbbm9kZV09XCJpdGVtXCJcbiAgICAgICAgICBbbm9kZVRpdGxlXT1cIml0ZW1bbm9kZVRpdGxlUGFyYW1dXCJcbiAgICAgICAgICBbbm9kZVNlbGVjdGFibGVdPVwidHJlZU5vZGVTZWxlY3Rpb25cIlxuICAgICAgICAgIFtub2RlRXhwYW5kZWRdPVwidHJlZUV4cGFuZEJ5RGVmYXVsdFwiXG4gICAgICAgICAgKHdoZW5Ob2RlU2VsZWN0KT1cIm5vZGVTZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgQGlmIChpdGVtICYmIGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIml2b3J5UmVjdXJzaXZlVGVtcGxhdGU7IGNvbnRleHQ6eyBsaXN0OiBpdGVtLmNoaWxkcmVuIH1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgfVxuICAgICAgICA8L2l2b3J5LXJlY3Vyc2l2ZW5vZGU+XG4gICAgICB9XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgfVxuICBAZWxzZSB7XG4gICAgPCEtLSBJZiB0aGUgdHJlZSBpcyBhIG5vbi1yZWN1cnNpdmUgLS0+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICB9ICBcbjwvZGl2PlxuIl19