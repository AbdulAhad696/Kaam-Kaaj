import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
  adminbuttons: any;
  userbuttons=
  [{title:"Home",ref:"/"},
  {title:"Service",ref:""},
  {title:"My Jobs",ref:""},
  {title:"Contact Admin",ref:"/contactus"},
  {title:"Wallet",ref:""},
  {title:"Add a Job",ref:""}];
  spbuttons= 
  [{title:"Dashboard",ref:""},
  {title:"View Jobs",ref:""},
  {title:"My Projects",ref:""},
  {title:"Wallet",ref:""},
  {title:"Contact Admin",ref:"/contactus"},
  {title:"Profile",ref:""}]
  mainpagebuttons=
  [{title:"Categories", ref:""},
  {title:"Community",ref:""},
  {title:"Contact Us",ref:"contactus"},
  {title:"Find Work",ref:""},
  {title:"Find Service",ref:""}]

  loggedin="localhost:4200";
  usertype:any="";

  
  constructor(private router:Router,private signinservice:SignInService) { 
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          //Hide progress spinner or progress bar
          this.loggedin=window.location.href.toString();
          this.usertype=this.signinservice.getusertype();
          console.log(this.usertype);
      }
    });
    
  }
  clearsession(){
    console.log("here");
    this.signinservice.clearsession();
  }
  ngOnInit(): void {
  }

}
