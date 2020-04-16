import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name : null,
    emailOffers : null,
    interfaceStyle : null,
    subscriptionType : null,
    notes : null
  };

  userSettings : UserSettings = { ...this.originalUserSettings };

  postError = false;
  postErrorMessage = '';
  subscriptionTypes : Observable<string[]>;
  singleModel = 'on';
  startDate : Date;
  dateRange : Date;
  startTime : Date;
  userRating = 0;
  maxRating = 10;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.dateRange = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse : any) {
    console.log('error', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage; 
  }

  onSubmit(form : NgForm) {
    console.log('In onSubmit : ', form.valid);
    console.log('In onSubmit : ', form.value);
    // if(form.valid){
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe (
    //     result => console.log("Success :",result),
    //     error => this.onHttpError(error)
    //   );
    // }
    // else {
    //   this.postError = true;
    //   this.postErrorMessage = "Fix form error....";
    // }

    
  }

  onBlur(field : NgModel){
    console.log('In onBlur : ', field.valid);
  }

}
