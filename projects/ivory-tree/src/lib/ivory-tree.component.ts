import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IvoryTreeFeaturesManager } from './ivory-tree-features.service';

@Component({
  selector: 'ivory-tree',
  templateUrl: './ivory-tree.component.html',
  styleUrl: './ivory-tree.component.scss'
})
export class IvoryTreeComponent implements OnInit, OnDestroy {

  @Input() 
  set treeSelectable(value: boolean) {
    this.featureManager.selectable = value;
  }

  constructor(
    public featureManager: IvoryTreeFeaturesManager
  ) {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

}
