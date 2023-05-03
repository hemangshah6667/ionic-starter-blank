import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  public selectedDate: string = '';
  public minDate: string;
  public maxDate: string;
  public showDatetimePicker: boolean = false;

  public resultList: any = [];

  constructor() {
    const currentDate = new Date().toISOString();
    this.selectedDate = '';
    this.minDate = currentDate;
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 5);
    this.maxDate = maxDate.toISOString();
  }

  onSubmit() {
    const today = new Date().toISOString();
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString();
    const tenDaysAgo = new Date(new Date(this.selectedDate).setDate(new Date(this.selectedDate).getDate() - 10)).toISOString();
    const oneYearAgo = new Date(new Date(this.selectedDate).setFullYear(new Date(this.selectedDate).getFullYear() - 1)).toISOString();

    this.resultList = [
      { label: 'Today', date: today },
      { label: 'Yesterday', date: yesterday },
      { label: '10 days past selected date', date: tenDaysAgo },
      { label: '1 year past selected date', date: oneYearAgo }
    ];
  }

  onClick() {
    this.showDatetimePicker = true;
  }

  onChange(event: any) {
    this.showDatetimePicker = false;
    this.selectedDate = event.detail.value;
  }

  onCancel() {
    this.showDatetimePicker = false;
  }

}
