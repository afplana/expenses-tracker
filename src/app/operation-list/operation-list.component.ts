import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OperationItem } from 'src/shared/model/operation-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss'],
})
export class OperationListComponent implements OnInit {
  @Input() operationItems: OperationItem[];
  @Output() delete: EventEmitter<OperationItem> = new EventEmitter<
    OperationItem
  >();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: OperationItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: OperationItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '100%',
      data: item
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }
}

export interface UpdateEvent {
  old: OperationItem;
  new: OperationItem;
}
