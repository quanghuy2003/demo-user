import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[]=[
    {

    }
  ];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(result =>{
      this.users=result;
      console.log(result);
    },error => {
      console.log(error)
      }
    )
  }

}
