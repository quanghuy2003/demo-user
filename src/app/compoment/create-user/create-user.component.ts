import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = {
    id: '',
    name: ''
  };
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  userForm : FormGroup= this.fb.group({
    name : new FormControl('',Validators.required)
  })

  create() {
    const user = this.userForm.value;
    this.userService.create(user).subscribe(() => {
      alert("thêm thành công")
    })
  }

}
