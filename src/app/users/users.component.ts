import { Component, Inject, OnInit } from '@angular/core';
import { combineLatestWith, Observable, map, of } from 'rxjs';
import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';
import { UserServiceModel } from './services/users.service.model';
import { USERS_SERVICE } from './services/users.token';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
 public show : string =""
 formBool: boolean = false
  constructor(@Inject(USERS_SERVICE) private userService: UserServiceModel) {}
  users$: Observable<UserModel[]> = this.userService.GetListUsers();
  filteredUsers$: Observable<UserModel[]> = of([])
  filterValue: string = '';

  ngOnInit(): void {
    this.listUsers();
  }
  filterChange(value: string) {
    this.userService.getFilterUser(value);
  }
 addUser() {

 }
  listUsers() {
    let filter$: Observable<string> = this.userService.filterUser$;
    this.filteredUsers$ = this.createFilterUser(filter$, this.users$);
  }
  addShow(event:any) {
    // console.log(event);
    if(event) this.show = "show";
  }
  createFilterUser(
    filter$: Observable<string>,
    users$: Observable<UserModel[]>
  ): Observable<UserModel[]> {
    return users$.pipe(
      combineLatestWith(filter$),
      map(([users, filter]) => {
        // console.log(users);
        if (filter === '') return users;
        return users.filter(
          (user: UserModel) =>
            user.name
              .toLocaleLowerCase()
              .indexOf(filter.toLocaleLowerCase()) !== -1
        );
      })
    );
  }
}
