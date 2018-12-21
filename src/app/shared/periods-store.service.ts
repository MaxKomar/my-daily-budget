import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Period} from './period.model';

@Injectable({
  providedIn: 'root'
})
export class PeriodsStoreService {

  periods: AngularFirestoreCollection<Period>;
  private periodDoc: AngularFirestoreDocument<Period>;

  constructor(
    private db: AngularFirestore
  ) {
    this.periods = db.collection<Period>('periods');
  }
}
