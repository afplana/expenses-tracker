import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperationItem } from 'src/shared/model/operation-item.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-operation-form',
  templateUrl: './add-operation-form.component.html',
  styleUrls: ['./add-operation-form.component.scss'],
})
export class AddOperationFormComponent implements OnInit {
  @Input() item: OperationItem;
  @Output() formSubmit: EventEmitter<OperationItem> = new EventEmitter<
    OperationItem
  >();
  isNewItem: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isNewItem = this.item ? false : this.createItem();
  }

  createItem(): boolean {
    this.item = new OperationItem('', null);
    return true;
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
