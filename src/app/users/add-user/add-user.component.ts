import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() showEvent = new EventEmitter<number>()
  @Input() show = ""
  userAddForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
    this.userAddForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone:new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }
  logOnChangedetection() {
    console.log("add user called");
    return true
  }
  trigger() {
    this.showEvent.emit(9)
  }
  get name() {
    return this.userAddForm.get('name');
  }
  get id() {
    return this.userAddForm.get('id');
  }
  get username() {
    return this.userAddForm.get('username');
  }
  get phone() {
    return this.userAddForm.get('phone');
  }
  get email() {
    return this.userAddForm.get('email');
  }
  onSubmitAdd() {
    let formValue = this.userAddForm.value;
   this.userService.insertUser(formValue);
   this.router.navigate([''])
   
     
  }

}
