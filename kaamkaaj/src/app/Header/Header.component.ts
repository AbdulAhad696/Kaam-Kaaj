import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
  adminbuttons=["Complains","Service Providers","Market Statistics","Wallet","Job History","Home"];
  userbuttons=["Home","Service","My Jobs","Contact Admin","Wallet","Add a Job"];
  spbuttons= ["Dashboard","View Jobs","My Projects","Wallet","Contact Admin","Profile"]
  mainpagebuttons=["Categories","Community","Contact Us","Find Work", "Find Service"]

  
  //loggedin:any;
  loggedin="localhost:4200";
  //login:any
  constructor(private router:Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          //Hide progress spinner or progress bar
          //this.loggedin=window.location.href.toString();
          //console.log("From End: " + this.loggedin);
      }
    });
  }

  ngOnInit(): void {
  }

}
