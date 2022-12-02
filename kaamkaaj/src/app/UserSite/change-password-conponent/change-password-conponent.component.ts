import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordService } from './../../Services/changePassword/change-password.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-change-password-conponent',
  templateUrl: './change-password-conponent.component.html',
  styleUrls: ['./change-password-conponent.component.css']
})
export class ChangePasswordConponentComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute,private ChangePasswordService:ChangePasswordService,private router:Router) { }
  password:any
  id:any
  success:any
  comment:any
  showPassword:boolean=false


  async changePassword(){
    this.id = this.ActivatedRoute.snapshot.params['id']
    if(await lastValueFrom(this.ChangePasswordService.changePassword(this.id,this.password)))
    {
      this.success=true
      this.comment="Changed successfully"
    }
    else{
      this.success=false
      this.comment="Error occured in changing password"
    }
    setTimeout(() => {
      if (this.success == true) {
        this.success = null;
        this.router.navigate(['/signin'])
      }
      this.success = null;


    }, 5000);
    
  }

  ngOnInit(): void {
  }

}
