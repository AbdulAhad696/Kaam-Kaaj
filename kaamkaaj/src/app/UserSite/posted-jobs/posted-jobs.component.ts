import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { ViewjobService } from 'src/app/Services/viewjob/viewjob.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {
  postedGigs:any;
  userId:any
  response:any
  constructor(private viewjobsService:ViewjobService,private signinService:SignInService) { }


  async ngOnInit() {
    this.userId = this.signinService.getId()

    this.postedGigs = await lastValueFrom(this.viewjobsService.getClientJobs(this.userId))
    // console.log(this.response)
  }

}
