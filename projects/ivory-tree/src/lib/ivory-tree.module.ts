import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

/* Components */
import { IvoryTreeComponent } from './ivory-tree.component';
import { IvoryTreenodeComponent } from './ivory-treenode/ivory-treenode.component';

/* Services */
import { IvoryTreeFeaturesManager } from './ivory-tree-features.service';

@NgModule({
  declarations: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IvoryTreeFeaturesManager 
  ],
  exports: [
    IvoryTreeComponent,
    IvoryTreenodeComponent
  ]
})
export class IvoryTreeModule { }
