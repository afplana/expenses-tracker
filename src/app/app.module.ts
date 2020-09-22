import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import { AddOperationFormComponent } from './add-operation-form/add-operation-form.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { OperationItemCardComponent } from './operation-list/operation-item-card/operation-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    AddOperationFormComponent,
    OperationListComponent,
    OperationItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
