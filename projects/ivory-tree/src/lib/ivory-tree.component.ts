import { Component, Input } from '@angular/core';

@Component({
  selector: 'ivory-tree',
  templateUrl: './ivory-tree.component.html',
  styleUrl: './ivory-tree.component.scss'
})
export class IvoryTreeComponent {

  @Input() hasNodeSelection: boolean = false;

}
