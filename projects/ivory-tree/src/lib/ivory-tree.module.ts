import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

/* Components */
import { IvoryTreeComponent } from './ivory-tree.component';
import { IvoryTreenodeComponent } from './ivory-treenode/ivory-treenode.component';
import { IvoryRecursivenodeComponent } from './ivory-recursivenode/ivory-recursivenode.component';

@NgModule({
  declarations: [
    IvoryTreeComponent,
    IvoryTreenodeComponent,
    IvoryRecursivenodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    IvoryTreeComponent,
    IvoryTreenodeComponent,
    IvoryRecursivenodeComponent
  ]
})
export class IvoryTreeModule { }
