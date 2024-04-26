import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ivory-treenode',
  templateUrl: './ivory-treenode.component.html',
  styleUrls: ['../styles/ivory-node.scss']
})
export class IvoryTreenodeComponent {

  public _node: any;
  public _isExpanded:boolean = false;

  @Input() 
  set node(value: any) {
    this._node = value;
  }
  get node() {
    return this._node;
  }

 @Input() 
 set nodeExpanded(value: any) {
  this._isExpanded = value;
 }

  @Input() nodeHasChildren: boolean = false;

  @Input() isNodeDisabled: boolean = false;

  @Output() whenNodeSelect = new EventEmitter();

  @Output() whenNodeExpand = new EventEmitter();


}
