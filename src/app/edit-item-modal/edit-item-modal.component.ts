import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperationItem } from 'src/shared/model/operation-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: OperationItem
  ) {}

  ngOnInit(): void {}

  onSubmitted(updatedItem: OperationItem) {
    this.dialogRef.close(updatedItem);
  }
}
