import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ivory-treenode',
  templateUrl: './ivory-treenode.component.html',
  styleUrl: './ivory-treenode.component.scss'
})
export class IvoryTreenodeComponent implements OnInit, OnDestroy {

  public _node: any;
  public _title: any;

  @Input() 
  set node(value: any) {
    this._node = value;
    console.log('has children -> ', this._node.children);
  }
  get node() {
    return this._node;
  }

  @Input()
  set nodeTitle(value: any) {
    this._title = value;
  }
  get nodeTitle() {
    return this._title;
  }

  @Input() isNodeDisabled: boolean = false;

  @Output() whenNodeSelect = new EventEmitter();

  @Output() whenNodeExpand = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy(): void {
    
  }

}
