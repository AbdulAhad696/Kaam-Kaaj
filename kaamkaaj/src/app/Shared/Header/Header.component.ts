import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
  adminbuttons:any;
  email="";
  userbuttons=
  [{title:"Home",ref:"customer-mainpage"},
  {title:"Service",ref:"services"},
  {title:"Posted Jobs",ref:"customer-mainpage/jobs"},
  {title:"Running Jobs",ref:"customer-mainpage/myprojects"},
  {title:"Contact Admin",ref:"customer-mainpage/contactadmin"},
  {title:"Add a Job",ref:"customer-mainpage/jobgigs"}
  ];
  spbuttons= 
  [{title:"Dashboard",ref:"service-provider"},
  {title:"View Jobs",ref:"service-provider/viewjobs"},
  {title:"My Projects",ref:"service-provider/myprojects"},
  {title:"Wallet",ref:"service-provider/wallet"},
  {title:"Contact Admin",ref:"service-provider/contactadmin"},
  {title:"Profile",ref:`service-provider/profile/${this.email}`}]
  mainpagebuttons=
  [{title:"Categories", ref:"services"},
  {title:"About Us",ref:"aboutus"},
  {title:"Contact Us",ref:"contactus"},
  {title:"Find Work",ref:"signin"},
  {title:"Find Service",ref:"signin"}]

  loggedin="localhost:4200";
  usertype:any="";

  
  constructor(private router:Router,private signinservice:SignInService) { 
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          //Hide progress spinner or progress bar
          this.loggedin=window.location.href.toString();
          
          if (this.loggedin.includes('sign')){
            this.clearsession();
            console.log("session cleared");
            this.usertype=null
          }
          else{
            this.usertype=this.signinservice.getusertype();
            this.email = this.signinservice.getdata();
            this.spbuttons[5].ref= `service-provider/profile/${this.email}`
            console.log(this.usertype);
          }
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
