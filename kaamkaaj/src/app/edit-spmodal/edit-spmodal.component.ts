import { createInjectableType } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-spmodal',
  templateUrl: './edit-spmodal.component.html',
  styleUrls: ['./edit-spmodal.component.css']
})
export class EditSPModalComponent implements OnInit {
  URL: string | ArrayBuffer | null | undefined = undefined
  private _changeDetection: any;

  constructor() {
  }
  closeModal() {
    // $('#exampleModalCenter').modal('toggle')
  }
  useImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // Read file as data url
      reader.onloadend = (e) => { // function call once readAsDataUrl is completed  
        console.log(e.target?.result)
        this.URL = e.target?.result
      }
      // this._changeDetection.markForCheck(); // Is called because ChangeDetection is set to onPush
    };
  }

  ngOnInit(): void {
  }

}
