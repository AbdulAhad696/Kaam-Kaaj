import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ViewComplaintsService } from 'src/app/Services/viewComplaints/view-complaints.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  constructor(private ViewComplaintsService:ViewComplaintsService) { }
  // ----complaints array--------
  allComplaints:any;
  // ------domain is base url-------
  domain:string = environment.baseUrl;
  // ---------getting all the complaints---------
  async gettingAllComplaintsData(){
    this.allComplaints = await lastValueFrom(this.ViewComplaintsService.gettingAllComplaints());
  }
  
  ngOnInit(): void {
    this.gettingAllComplaintsData();
  }

}
