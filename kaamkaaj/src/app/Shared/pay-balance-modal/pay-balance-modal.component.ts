import { Component, Input, OnInit } from '@angular/core';
import { ServiceProviderProfileService } from 'src/app/Services/serviceProviderProfile/service-provider-profile.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { TransactionsService } from 'src/app/Services/transactions/transactions.service';
import { lastValueFrom } from "rxjs"
@Component({
  selector: 'app-pay-balance-modal',
  templateUrl: './pay-balance-modal.component.html',
  styleUrls: ['./pay-balance-modal.component.css']
})
export class PayBalanceModalComponent implements OnInit {
  @Input() balance;
  userId;
  @Input() refreshWallet: () => void;
  userType: any;

  constructor(private serviceProviderProfile: ServiceProviderProfileService, private signinService: SignInService, private transactionService: TransactionsService) { }

  async confirmPayment() {
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
    $('#exampleModalCenter').modal('toggle')
    this.refreshWallet()
  }


  ngOnInit(): void {
    this.userType = this.signinService.getusertype()
    this.userId = this.signinService.getId()
  }

}
