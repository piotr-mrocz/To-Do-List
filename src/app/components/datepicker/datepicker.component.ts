import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec",
  "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  daysInMonth = [31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  years: Array<number> = this.createYearRange();
  days: Array<number>;
  showDatepicker = false;
  date = this.setCurrentDay() + '.' + this.setCurrentMonth() + '.' + this.setCurrentYear();

  // send values to parent component
  @Output() values = new EventEmitter<string>();

  sendValues(){
    this.values.emit(this.date);
  }


  // set current date
  private setCurrentDay() {
    var currentDay = new Date().getDate();
    if (currentDay < 10) {
      return '0' + currentDay;
    }
    else {
      return currentDay;
    }
  }

  private setCurrentMonth() {
    var currentMonth = new Date().getMonth()+1;
    if (currentMonth < 10) {
      return '0' + currentMonth;
    }
    else {
      return currentMonth;
    }
  }

  private setCurrentYear() {
    return new Date().getFullYear();
  }


  // range from curent year to 1900
  private createYearRange(): Array<number> {
    var addedYears = [];
    for (var i = new Date().getFullYear(); i < 2032 ; i++) {
      addedYears.push(i);
    }
    return addedYears;
  }

  // check if year is leap
  isLeapYear(year){
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
      return this.daysInMonth[1] = 29;
    }
    else {
      return this.daysInMonth[1] = 28;
    }
  }

  // how many days there are in a month
  limitedDaysInMonth(month) {
    var index = this.months.findIndex(x => x == month);
    this.days = Array(this.daysInMonth[index]).fill(1).map((x, i) => i + 1);
  }

   // go to month tab
   goToMonthTab() {
    document.getElementById("year").setAttribute("class", "tab-pane fade");
    document.getElementById("month").setAttribute("class", "tab-pane fade show active");
    document.getElementById("month-tab").setAttribute("class", "nav-link active");
    document.getElementById("year-tab").setAttribute("class", "nav-link");
  }

  // go to day tab
  goToDayTab() {
    document.getElementById("month").setAttribute("class", "tab-pane fade");
    document.getElementById("day").setAttribute("class", "tab-pane fade show active");
    document.getElementById("day-tab").setAttribute("class", "nav-link active");
    document.getElementById("month-tab").setAttribute("class", "nav-link");
  }

  // hide and show content datepicker
  hideAndShowDatepicker() {
    this.showDatepicker = !this.showDatepicker;
  }

  // change curent year to selected year
  changeCurrentYearToSelectedYear(year) {
    this.date =  year;
  }

   // change curent month to selected month
  changeCurrentMonthToSelectedMonth(month) {
    var index = this.months.findIndex(x => x == month) + 1;
    if (index < 10) {
      this.date = '0' + index + '.' + this.date;
    } else {
      this.date = index + '.' + this.date;
    }
  }

   // change curent day to selected day
  changeCurrentDayToSelectedDay(day) {
    if (day < 10) {
      this.date = '0' + day + '.' + this.date;
    } else {
      this.date = day + '.' + this.date;
    }
  }
}
