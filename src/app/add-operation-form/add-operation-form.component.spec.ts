import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperationFormComponent } from './add-operation-form.component';

describe('AddOperationFormComponent', () => {
  let component: AddOperationFormComponent;
  let fixture: ComponentFixture<AddOperationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOperationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOperationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
