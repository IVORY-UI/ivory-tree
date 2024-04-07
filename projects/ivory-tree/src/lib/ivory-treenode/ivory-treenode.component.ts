import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { UniqueIdGeneratorService } from '../providers/uniquegen.service';

@Component({
  selector: 'ivory-treenode',
  templateUrl: './ivory-treenode.component.html',
  styleUrl: './ivory-treenode.component.scss'
})
export class IvoryTreenodeComponent implements OnInit, OnDestroy {

  public _node: any;
  public _title: any;
  public _uniqueId: any;
  public _expanded: boolean = false;

  @Input() 
  set node(value: any) {
    this._node = value;
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

  @Input() nodeSelectable: boolean = false;

  @Input() 
  set nodeExpanded(value: boolean) {
    this._expanded = value;
  }

  @Output() whenNodeSelect = new EventEmitter();

  constructor(
    public uniqueIdService: UniqueIdGeneratorService
  ) {
    this._uniqueId = this.uniqueIdService.getUniqueId();
  }

  ngOnInit() {
    
  }

  nodeSelectionChange(event: Event) {
    console.log('Selection event -> ', event);
  }

  ngOnDestroy(): void {
    
  }

}
