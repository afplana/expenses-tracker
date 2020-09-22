import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationItemCardComponent } from './operation-item-card.component';

describe('OperationItemCardComponent', () => {
  let component: OperationItemCardComponent;
  let fixture: ComponentFixture<OperationItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
