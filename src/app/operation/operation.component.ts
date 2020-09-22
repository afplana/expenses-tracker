import { Component, OnInit } from '@angular/core';
import { OperationItem } from 'src/shared/model/operation-item.model';
import { UpdateEvent } from '../operation-list/operation-list.component';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss'],
})
export class OperationComponent implements OnInit {
  operationItems: OperationItem[] = new Array<OperationItem>();
  totalBudget: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: OperationItem) {
    this.operationItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: OperationItem) {
    let indexOfItem = this.operationItems.indexOf(item);
    this.operationItems.splice(indexOfItem, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    let idx = this.operationItems.indexOf(updateEvent.old);
    this.operationItems[idx] = updateEvent.new;

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
