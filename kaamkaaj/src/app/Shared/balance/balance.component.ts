import { Component, OnInit, Input } from '@angular/core';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() balance;

  @Input() income;
  constructor(private signinservice: SignInService) { }
  userType = this.signinservice.getusertype()
  ngOnInit(): void {
  }

}
