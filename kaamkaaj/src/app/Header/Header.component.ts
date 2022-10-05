import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
  adminbuttons=["Complains","Service Providers","Market Statistics","Wallet","Job History","Home"];
  userbuttons=["Home","Service","My Jobs","Contact Admin","Wallet","Add a Job"];
  spbuttons= ["Dashboard","View Jobs","My Projects","Wallet","Contact Admin","Profile"]
  //loggedin=location.host;
  loggedin="localhost:4200";
  constructor() { }

  ngOnInit(): void {
  }

}
