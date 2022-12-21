import { Component, Input, OnInit } from '@angular/core';
import { ServiceProviderProfileService } from 'src/app/Services/serviceProviderProfile/service-provider-profile.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { TransactionsService } from 'src/app/Services/transactions/transactions.service';
import { lastValueFrom } from "rxjs"
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-pay-balance-modal',
  templateUrl: './pay-balance-modal.component.html',
  styleUrls: ['./pay-balance-modal.component.css']
})
export class PayBalanceModalComponent implements OnInit {
  @Input() balance;
  userId;
  userType: any;

  constructor(private router:Router,private serviceProviderProfile: ServiceProviderProfileService, private signinService: SignInService, private transactionService: TransactionsService) { }

  async confirmPayment() {

    console.log("BAND")
    var paymentData = {
      amount: this.balance,
      from: this.userId,
      to: "639726e583fb10e22a7bb183",
      timeStamp: new Date()
    }
    await lastValueFrom(this.transactionService.spBalanceTransaction(paymentData)).then(
      () => {
        lastValueFrom(this.transactionService.spBalanceReset(this.userId)).then(
          () => {
            lastValueFrom(this.transactionService.payMoneyToAdmin(paymentData.amount))
          }
        )
        console.log("Done")
      }
    ).catch(err => { console.log(err) })
    
    this.refreshWallet()
  }
  refreshWallet(){
    let currenturl = this.router.url
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currenturl]);
      });
  }


  ngOnInit(): void {
    this.userType = this.signinService.getusertype()
    this.userId = this.signinService.getId()
  }

}
