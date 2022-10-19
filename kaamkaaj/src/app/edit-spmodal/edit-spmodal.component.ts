import { createInjectableType } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog"

@Component({
  selector: 'app-edit-spmodal',
  templateUrl: './edit-spmodal.component.html',
  styleUrls: ['./edit-spmodal.component.css']
})
export class EditSPModalComponent implements OnInit {
  name;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
  }

  ngOnInit(): void {
  }

}
