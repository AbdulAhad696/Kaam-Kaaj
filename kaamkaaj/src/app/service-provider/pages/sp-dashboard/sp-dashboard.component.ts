import { Component, OnInit } from '@angular/core';
import { style,trigger,animate,transition,state,query,stagger,group} from '@angular/animations';
import { ServiceProviderProfileService } from 'src/app/Services/serviceProviderProfile/service-provider-profile.service';
import { SignInService } from 'src/app/Services/sign-in/sign-in.service';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sp-dashboard',
  templateUrl: './sp-dashboard.component.html',
  styleUrls: ['./sp-dashboard.component.css'],
    animations:[
      trigger('flyInOut', [
        state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX(-100%)' }),
          animate(1000)
        ]),
        transition('* => void', [
          animate(100, style({ transform: 'translateX(100%)' }))
        ])
      ]),
      trigger('myInsertRemoveTrigger', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('2000ms', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          animate('1000ms', style({ opacity: 0 }))
        ])
      ]),
    ]
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({
  //       width: '*',
  //       transform: 'translateX(0)', opacity: 1
  //     })),
  //     transition(':enter', [
  //       style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
  //       group([
  //         animate('1.0s 0.1s ease', style({
  //           transform: 'translateX(0)',
  //           width: '*'
  //         })),
  //         animate('6.0s ease', style({
  //           opacity: 1
  //         }))
  //       ])
  //     ]),
  //     transition(':leave', [
  //       group([
  //         animate('0.3s ease', style({
  //           transform: 'translateX(50px)',
  //           width: 10
  //         })),
  //         animate('0.3s 0.2s ease', style({
  //           opacity: 0
  //         }))
  //       ])
  //     ])
  //   ])
  // ]
})
export class SpDashboardComponent implements OnInit {
  email:string
  spProfile:object
  constructor(private spProfileService: ServiceProviderProfileService,private signInService: SignInService) { }

  async ngOnInit() {
    this.email = this.signInService.getemail()
    this.spProfile = await lastValueFrom(this.spProfileService.fetchingServiceProviderProfile(this.email))
    console.log(this.spProfile)
    if(this.spProfile!=null){
    this.spProfile[0].serviceProviderDetails[0].profilePicture = environment.baseUrl + "/" + this.spProfile[0]?.serviceProviderDetails[0]?.profilePicture
    }
  }

}
