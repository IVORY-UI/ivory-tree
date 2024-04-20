import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/* Components */
import { IvoryTreeComponent } from './ivory-tree.component';
import { IvoryTreenodeComponent } from './ivory-treenode/ivory-treenode.component';
import { IvoryRecursivenodeComponent } from './ivory-recursivenode/ivory-recursivenode.component';
import * as i0 from "@angular/core";
export class IvoryTreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, declarations: [IvoryTreeComponent,
            IvoryTreenodeComponent,
            IvoryRecursivenodeComponent], imports: [BrowserModule,
            FormsModule], exports: [IvoryTreeComponent,
            IvoryTreenodeComponent,
            IvoryRecursivenodeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, imports: [BrowserModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: IvoryTreeModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXZvcnktdHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pdm9yeS10cmVlL3NyYy9saWIvaXZvcnktdHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLGdCQUFnQjtBQUNoQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFrQmxHLE1BQU0sT0FBTyxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxpQkFkeEIsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QiwyQkFBMkIsYUFHM0IsYUFBYTtZQUNiLFdBQVcsYUFHWCxrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLDJCQUEyQjsrR0FHbEIsZUFBZSxZQVR4QixhQUFhO1lBQ2IsV0FBVzs7MkZBUUYsZUFBZTtrQkFoQjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVc7cUJBQ1o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QiwyQkFBMkI7cUJBQzVCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEl2b3J5VHJlZUNvbXBvbmVudCB9IGZyb20gJy4vaXZvcnktdHJlZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXZvcnlUcmVlbm9kZUNvbXBvbmVudCB9IGZyb20gJy4vaXZvcnktdHJlZW5vZGUvaXZvcnktdHJlZW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IEl2b3J5UmVjdXJzaXZlbm9kZUNvbXBvbmVudCB9IGZyb20gJy4vaXZvcnktcmVjdXJzaXZlbm9kZS9pdm9yeS1yZWN1cnNpdmVub2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEl2b3J5VHJlZUNvbXBvbmVudCxcbiAgICBJdm9yeVRyZWVub2RlQ29tcG9uZW50LFxuICAgIEl2b3J5UmVjdXJzaXZlbm9kZUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSXZvcnlUcmVlQ29tcG9uZW50LFxuICAgIEl2b3J5VHJlZW5vZGVDb21wb25lbnQsXG4gICAgSXZvcnlSZWN1cnNpdmVub2RlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSXZvcnlUcmVlTW9kdWxlIHsgfVxuIl19