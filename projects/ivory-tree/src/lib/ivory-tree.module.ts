import { NgModule } from '@angular/core';

/* Components */
import { IvoryTreeComponent } from './ivory-tree.component';
import { IvoryTreenodeComponent } from './ivory-treenode/ivory-treenode.component';

/* Directives */

@NgModule({
  declarations: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ],
  imports: [
  ],
  exports: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ]
})
export class IvoryTreeModule { }
