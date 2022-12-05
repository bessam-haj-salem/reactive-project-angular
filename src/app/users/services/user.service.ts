import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { UserServiceModel } from './users.service.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceModel {

 private urlGetClients;
 private filterUser = new BehaviorSubject<string>("")
 public filterUser$:Observable<string> = this.filterUser.asObservable()
 private userAdded = new Subject<UserModel>()
 public userAdded$:Observable<UserModel> = this.userAdded.asObservable()
 

  constructor(private http: HttpClient) { 
    this.urlGetClients = environment.urlGetUsers
  }

  getFilterUser(value:any) :void{
    this.filterUser.next(value)
  }
 addUser(user: UserModel) {

 }
  GetListUsers() :Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.urlGetClients)
    // .pipe(
    //   tap(res => console.log(res))
    // )
  }
 insertUser(user:UserModel):void{
  this.userAdded.next(user);

 }

}
