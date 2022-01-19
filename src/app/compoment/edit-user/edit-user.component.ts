import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    id: '',
    name: ''
  };

  userForm : FormGroup= this.fb.group({
    name : new FormControl('',Validators.required)
  })

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      const id = parammap.get('id');
      console.log(id);
      // @ts-ignore
      this.userService.getById(id).subscribe(result =>{
        this.user= result;
          console.log(result)
        },
        error => {
          console.log(error)
        })
    },)
    this.user = {
      name :'',
    }
  }

  updateUserProfile(){
    const user = this.userForm.value;
    console.log(user);
    // @ts-ignore
    this.userService.updateUserProfile(this.user.id,user).subscribe(()=>{
      alert("thành công")
    })
  }

  delete(){
    // @ts-ignore
    this.userService.deleteUser(this.user.id).subscribe(()=>{
      alert("xóa thành công")
    })
  }

  create() {
    const user = this.userForm.value;
    this.userService.create(user).subscribe(() => {
      alert("thêm thành công")
    })
  }
}
