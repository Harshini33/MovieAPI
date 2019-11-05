import { Component, OnInit } from '@angular/core';
import { switchMap } from "rxjs/operators" // RxJS v6

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile_id : string;
  profile_date : string;

  constructor() { }
  
  ngOnInit() {
    var months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
      ];

    let some = new URLSearchParams(location.search.substr(1));
    this.profile_id = some.get('user-id');
    let date = some.get('date')

    let mydate = new Date(date);
    let mode_time = "AM";
    let hour = mydate.getHours();
    if (hour > 12){
        mode_time = "PM";
        hour -= 12;
    }
    let pro_date = months[mydate.getMonth()] + ' ' + mydate.getDate() + ', ' + mydate.getFullYear() + ', ' + hour + ':' + mydate.getMinutes() + ':' + mydate.getSeconds() + ' ' + mode_time;
    console.log(pro_date);
    this.profile_date = pro_date;

  }

}
