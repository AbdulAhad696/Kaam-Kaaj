import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from './../../Services/changePassword/change-password.service';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {

  constructor(private ChangePasswordService:ChangePasswordService) { }
  email:any
  success:boolean=true
  sendMail(){
    this.ChangePasswordService.sendMial(this.email)
    $('#exampleModalCenter').modal('toggle')

  }
  closeModal(){
    $('#exampleModalCenter').modal('toggle')
  }

  ngOnInit(): void {
  }

}
