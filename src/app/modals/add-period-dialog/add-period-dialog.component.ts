import {Component, Inject, OnInit} from '@angular/core';
import {IPeriod} from '../../shared/period.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-period-dialog',
  templateUrl: './add-period-dialog.component.html',
  styleUrls: ['./add-period-dialog.component.css']
})
export class AddPeriodDialogComponent implements OnInit {

  model: IPeriod = {
    startDate: new Date()
  } as IPeriod;

  constructor(
    public dialogRef: MatDialogRef<AddPeriodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  get minDate(): Date {
    if (this.model.startDate) {
      const updatedDate = new Date(this.model.startDate);
      updatedDate.setDate(this.model.startDate.getDate() + 1);
      return updatedDate;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
