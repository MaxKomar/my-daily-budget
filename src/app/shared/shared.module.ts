import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../../environments/environment';
import { PeriodsStoreService } from './periods-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    PeriodsStoreService
  ]
})
export class SharedModule { }
