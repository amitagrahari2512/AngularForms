import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }

  postUserSettingsForm (userSettings : UserSettings) : Observable<any> {
    //Of Automatically return observables
    //return of(userSettings);

    //For Post we need to use Observable as any
    return this.http.post('https://putsreq.com/Cf0DAgHZ2eAKcVghw8YZ', userSettings);
  }

  getSubscriptionTypes() : Observable<string[]> {
      return of(['Monthly' ,'Annual', 'Lifetime']);
  }
}
