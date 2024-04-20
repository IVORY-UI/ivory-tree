import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public treeData = [{
    name: 'Root',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1' },
          { name: 'Grandchild 2' }
        ]
      },
      {
        name: 'Child 2',
        children: [
          { name: 'Grandchild 3' },
          { name: 'Grandchild 4' }
        ]
      }
    ]
  }];

}
