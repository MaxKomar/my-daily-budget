import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AddPeriodDialogComponent } from './modals/add-period-dialog/add-period-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPeriodDialogComponent,
    AddPeriodDialogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPeriodDialogComponent]
})
export class AppModule {

}
