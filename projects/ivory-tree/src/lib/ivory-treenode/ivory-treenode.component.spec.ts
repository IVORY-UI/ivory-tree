import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvoryTreenodeComponent } from './ivory-treenode.component';

describe('IvoryTreenodeComponent', () => {
  let component: IvoryTreenodeComponent;
  let fixture: ComponentFixture<IvoryTreenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvoryTreenodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvoryTreenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
