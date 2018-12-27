import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AddPeriodDialogComponent } from './modals/add-period-dialog/add-period-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    AddPeriodDialogComponent,
    AddPeriodDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPeriodDialogComponent]
})
export class AppModule {

}
