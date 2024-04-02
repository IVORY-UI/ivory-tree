import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ivory-treenode',
  templateUrl: './ivory-treenode.component.html',
  styleUrl: './ivory-treenode.component.scss'
})
export class IvoryTreenodeComponent {

  private _title: any;

  @Input()
  set nodeTitle(value: any) {
    this._title = value;
  }
  get nodeTitle() {
    return this._title;
  }

  @Input() isNodeDisabled: boolean = false;

  @Input() hasChildren: boolean = false;

  @Output() whenNodeSelect = new EventEmitter();

  @Output() whenNodeExpand = new EventEmitter();


}
