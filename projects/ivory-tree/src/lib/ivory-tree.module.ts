import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

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
    BrowserModule
  ],
  exports: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ]
})
export class IvoryTreeModule { }
