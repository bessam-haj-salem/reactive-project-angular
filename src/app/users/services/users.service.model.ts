import { Observable, Subject } from "rxjs";
import { UserModel } from "../models/user.model";

export interface UserServiceModel {
     GetListUsers(): Observable<UserModel[]>;
     getFilterUser(value:string):void;
     filterUser$: Observable<string>;
     addUser(user: UserModel):void;


}