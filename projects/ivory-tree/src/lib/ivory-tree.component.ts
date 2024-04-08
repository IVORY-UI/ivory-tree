import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ivory-tree',
  templateUrl: './ivory-tree.component.html',
  styleUrl: './ivory-tree.component.scss'
})
export class IvoryTreeComponent implements OnInit, OnDestroy {

  @Input() treeData: any;

  @Input() treeSelectable: boolean = false;

  @Input() expandByDefault: boolean = false;

  @Input() nodeTitleParam: string = '';

  constructor(
  ) {}

  ngOnInit(): void {
    
  }

  /**
   * Invokes when any node checkbox selected/unselected and maintains the pile of selected nodes.
   * @param event Change event
   */
  nodeSelectionChange(event: any) {
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
  updateStack(source: any) {
    // if (!this.util.isContains(this._selectedStack, source, 'folderId')) {
    //   this._selectedStack = [source];
    //   return true;
    // }
  }


  ngOnDestroy(): void {
    
  }

}
