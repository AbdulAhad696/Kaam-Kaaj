import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  spBalanceTransaction(transactionData: any) {

    console.log(environment.baseUrl + "/transactions/spToAdmin")
    return this.http.post(environment.baseUrl + "/transactions/spToAdmin", transactionData)
  }
  spBalanceReset(spId: any) {
    console.log(environment.baseUrl + "/transactions/spToAdmin")
    console.log(environment.baseUrl + "/transactions/spToAdmin" + spId)
    return this.http.patch(`${environment.baseUrl}/transactions/spToAdmin/${spId}`, {})
  }
  payMoneyToAdmin(amount: any) {
    return this.http.patch(`${environment.baseUrl}/transactions/getMoney/${amount}`, {})
  }
  getTransactions(spId: any) {
    console.log(environment.baseUrl + "/getTransactions/" + spId)
    return this.http.get(`${environment.baseUrl}/transactions/getTransactions/${spId}`)
  }
}
