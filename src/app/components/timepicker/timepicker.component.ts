import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit  {

  currentTime = this.setCurrentHour() + ':' + this.setCurrentMinutes();
  hoursInDay = [];
  minutesInHour = [];
  showTimepicker = false;

  ngOnInit() {
    // Hours in day
    for (var i = 1; i < 25; i ++) {
      this.hoursInDay.push(i);
    }

    // Minutes in hour
    for (var i = 0; i < 60; i ++) {
      this.minutesInHour.push(i);
    }
  }

   // send values to parent component
   @Output() values = new EventEmitter<string>();

   sendValues(){
     this.values.emit(this.currentTime);
   }


  // Set currentTime
  private setCurrentHour() {
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
      return  + '0' + currentHour;
    } else {
      return currentHour;
    }
  }

  private setCurrentMinutes() {
    var currentMinutes = new Date().getMinutes();
    if (currentMinutes < 10) {
      return  + '0' + currentMinutes;
    } else {
      return currentMinutes;
    }
  }

  // go to minutes tab
  goToMinutesTab() {
    document.getElementById("hour").setAttribute("class", "tab-pane fade");
    document.getElementById("minute").setAttribute("class", "tab-pane fade show active");
    document.getElementById("minute-tab").setAttribute("class", "nav-link active");
    document.getElementById("hour-tab").setAttribute("class", "nav-link");
  }

  hideAndShowTimepicker() {
    this.showTimepicker = !this.showTimepicker;
  }

  changeCurrentHourToSelectedHour(hour) {
    if (hour < 10) {
      this.currentTime = this.currentTime = '0' + hour + ':' ;
    } else {
      this.currentTime = this.currentTime = hour + ':' ;
    }
  }

  changeCurrentMinutesToSelectedMinutes(minute) {
   if (minute < 10) {
      this.currentTime = this.currentTime  +  '0' + minute;
      } else {
        this.currentTime = this.currentTime +  minute;
      }
  }
}
