import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() balance;

  @Input() income;
  constructor() { }

  ngOnInit(): void {
  }

}
