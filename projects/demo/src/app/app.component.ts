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

  public snippet1: string = `
  <ivory-tree>
    @for (item of treeData; track $index) {
      <ivory-treenode
        [node]="item"
        [nodeHasChildren]="item.children.length>0"
        [nodeExpanded]="true"
      >
        <ng-container title>
          {{item.name}}
        </ng-container>
        @for (childItem of item.children; track $index) {
          <ivory-treenode
            [node]="childItem"
            [nodeHasChildren]="childItem.children.length>0"
            [nodeExpanded]="true"
          >
            <ng-container title>
              {{childItem.name}}
            </ng-container>
            @for (grandchildItem of childItem.children; track $index) {
              <ivory-treenode
                [node]="grandchildItem"
              >
                <ng-container title>
                  {{grandchildItem.name}}
                </ng-container>
              </ivory-treenode>
            }
          </ivory-treenode>
        }
      </ivory-treenode>
    }
  </ivory-tree>
  `;

  public snippet2 = `
  <ivory-tree
    [treeRecursive]="true"
    [treeData]="treeData"
    [treeNodeSelection]="false"
    [treeExpandByDefault]="true"
    [nodeTitleParam]="'name'"
  >
  </ivory-tree>
  `;

}
