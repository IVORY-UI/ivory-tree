import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'ivory-tree',
  templateUrl: './ivory-tree.component.html',
  styleUrl: './ivory-tree.component.scss'
})
export class IvoryTreeComponent implements OnInit, OnDestroy {

  @Input() hasNodeSelection: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

}