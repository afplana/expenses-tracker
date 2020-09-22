import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OperationItem } from 'src/shared/model/operation-item.model';

@Component({
  selector: 'app-operation-item-card',
  templateUrl: './operation-item-card.component.html',
  styleUrls: ['./operation-item-card.component.scss'],
})
export class OperationItemCardComponent implements OnInit {
  @Input() item: OperationItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
