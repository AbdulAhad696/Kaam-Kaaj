import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../Services/transactions/transactions.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionService: TransactionsService, private signinService: SignInService) { }
  allTransactions: any = []
  currentUserId: any = this.signinService.getId()
  async getAllTransactions() {
    this.allTransactions = await lastValueFrom(this.transactionService.getTransactions(this.signinService.getId()))
  }
  ngOnInit(): void {
    this.getAllTransactions()
  }
  searchText = "";
  // allTransactions = [
  //   { "from": "Huzaifa", "to": "Kaam Kaaj", "timeStamp": "20 DEC, 2022 9:00pm", "amount": "500" },
  //   { "from": "Huzaifa", "to": "Kaam Kaaj", "timeStamp": "21 DEC, 2022 9:00pm", "amount": "300" },
  //   { "from": "Huzaifa", "to": "Kaam Kaaj", "timeStamp": "22 OCT, 2022 7:00pm", "amount": "100" },
  //   { "from": "Huzaifa", "to": "Kaam Kaaj", "timeStamp": "23 JAN, 2022 3:00pm", "amount": "600" }]

}
