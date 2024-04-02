import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvoryTreeComponent } from './ivory-tree.component';

describe('IvoryTreeComponent', () => {
  let component: IvoryTreeComponent;
  let fixture: ComponentFixture<IvoryTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IvoryTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
