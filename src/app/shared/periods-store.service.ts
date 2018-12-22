import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {IPeriod, Period} from './period.model';
import {Observable} from 'rxjs';

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

  addPeriod(period: IPeriod): Promise<any> {
    if (period instanceof Period) {
      period = period.toJSON();
    }
    return this.db.collection<any>('periods').add(period);
  }
}
