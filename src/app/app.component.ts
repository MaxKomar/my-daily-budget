import { Component } from '@angular/core';
import {PeriodsStoreService} from './shared/periods-store.service';
import {Period} from './shared/period.model';
import {MatDialog} from '@angular/material';
import {AddPeriodDialogComponent} from './modals/add-period-dialog/add-period-dialog.component';
import {map} from 'rxjs/operators';
import {AuthService} from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  periods;
  title = 'my-daily-budget';

  constructor(
    private periodsStore: PeriodsStoreService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.periods = this.periodsStore.periods.snapshotChanges().pipe(map(items => {
      console.log(items);
      return items.map(item => {
        const data = item.payload.doc.data();
        const id = item.payload.doc.id;
        return new Period({ id, ...data });
      });
    }));
    console.log(this.periods);
  }

  loginWithGoogle() {
    this.authService.googleLogin();
  }

  addPeriod() {
    const dialogRef = this.dialog.open(AddPeriodDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.periodsStore.addPeriod(result);
      }
    });
  }

  deletePeriod(item: Period) {
    this.periodsStore.deletePeriod(item);
  }
}
