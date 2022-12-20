import { Component, OnInit, OnChanges ,Input} from '@angular/core';
import { SubmitJobByWorkerService } from './../../../Services/submitJobByWorker/submit-job-by-worker.service';
import { lastValueFrom } from 'rxjs';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-project-modal',
  templateUrl: './submit-project-modal.component.html',
  styleUrls: ['./submit-project-modal.component.css']
})
export class SubmitProjectModalComponent implements OnInit {

  @Input() projectDetails: any

  rating:Number=0
  review:any
  ratingText:any
  submit:any

  constructor(public SubmitJobByWorkerService:SubmitJobByWorkerService, public SignInService:SignInService,public router:Router) { }

  ngOnInit(): void {
  }
  rate(value:any){
    this.rating=value
    this.ratingText="Done"

  }
  closeModal() {
    $('#exampleModalCenter').modal('toggle')
    this.rating=0
    this.review=""
    this.ratingText=""
  }

  async handleSubmit(){
    this.submit={
      rating:this.rating,
      earning:this.projectDetails.earning,
      review:this.review
    }
    const result=await lastValueFrom(this.SubmitJobByWorkerService.submitJob(this.projectDetails.jobId,this.submit))
    $('#exampleModalCenter').modal('toggle')
    this.rating=0
    this.review=""
    this.ratingText=""
    
    window.location.reload()

  }


}
