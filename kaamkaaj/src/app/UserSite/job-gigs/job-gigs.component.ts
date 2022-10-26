import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AddJobService } from 'src/app/Services/add-job/add-job.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { SpinnerService } from 'src/app/Services/spinner/spinner.service';
import { GetServicesService } from '../../Services/get-services/get-services.service';

@Component({
  selector: 'app-job-gigs',
  templateUrl: './job-gigs.component.html',
  styleUrls: ['./job-gigs.component.css']
})
export class JobGigsComponent implements OnInit {

  constructor( private GetServicesService:GetServicesService , private AddJobService:AddJobService , private SignInService:SignInService , private SpinnerService: SpinnerService ) { }
// -----------------------variable required--------------------------
  allServices: any;
  jobData:any;
  isJobAdded:any;
  selectedServiceObject:any;

// -----------------------------schema variables-------------------------
  title:string;
  jobPostDate:Date;
  description:string;
  estAmount:number;
  // clientRating:number;
  // bids:any;
  // gigPics:any;
  // spRating:number;
  status:string;
  jobAddress:string;
  estCompletionTime:string;
  category:any
  // jobAssignedTo:any;
  jobAssignedBy:any;
  // jobDescription:"";
  // clientAddress:"";

  // ----------------------------posting job-----------------------
  async addingJob(job:any){ 
    if(await lastValueFrom( this.AddJobService.postJobApi(job) )){
      return "Job is added successfully!!!!..........";
    }
    else{
      return "Service is down currently. You may try later..";
    }
  }

  // ------------------------geting selected service -----------------
  async currentService(currentService:string){
    this.selectedServiceObject =await lastValueFrom(this.AddJobService.getSpecificJob(currentService))
    this.category = this.selectedServiceObject[0]._id;

  }

  // ----------------------------getting selected amount--------------------
  gettingAmount(amount:number){
    this.estAmount = amount;
  }

  // ------------------------------getting selected time----------------------

  gettingTime(duration:string){
    this.estCompletionTime = duration;
  }

// -----------------------------------form submission--------------------------

  async handleSubmit(){
    this.jobData = {
      title:this.title,
      jobPostDate:new Date(),
      description:this.description,
      estAmount:this.estAmount,
      status:"punched",
      jobAddress:this.jobAddress,
      estCompletionTime:this.estCompletionTime,
      category:this.category,
      jobAssignedBy:this.jobAssignedBy
    }

    this.SpinnerService.requestStarted();
    this.isJobAdded =await this.addingJob(this.jobData);
    this.SpinnerService.requestEnded();

    this.title="";
    // this.jobPostDate= ;
    this.description="";
    this.estAmount=0;
    this.status="";
    this.jobAddress="";
    this.estCompletionTime="";
    this.category="";
    this.jobAssignedBy="";
    setTimeout(()=>{
      alert(this.isJobAdded);
    },10)

  }

  // --------------------------getting all services-----------------------------
  async gettingServices(){
    this.allServices = await lastValueFrom(this.GetServicesService.fetchingServices());
  }

  // ----------------------------converting amount dropdown to input field------------------

  amountToogle(){
    document.getElementById("amountdropdown")?.classList.add("hide");
    document.getElementById("amountFields")?.classList.remove("hide");
    document.getElementById("amountFields")?.focus();    
  }

// ----------------------------converting duration dropdown to input field-----------------------
  
  timeToogle(){
    document.getElementById("Durationdropdown")?.classList.add("hide");
    document.getElementById("DurationFields")?.classList.remove("hide");
    document.getElementById("DurationFields")?.focus();
  }

  ngOnInit(): void { 
    this.gettingServices();
    this.jobAssignedBy = this.SignInService.getId()
  }

}
