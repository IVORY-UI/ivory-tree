import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

/* Components */
import { IvoryTreeComponent } from './ivory-tree.component';
import { IvoryTreenodeComponent } from './ivory-treenode/ivory-treenode.component';

@NgModule({
  declarations: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ]
})
export class IvoryTreeModule { }
