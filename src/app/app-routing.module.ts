import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./compoment/list-user/list-user.component";
import {EditUserComponent} from "./compoment/edit-user/edit-user.component";
import {CreateUserComponent} from "./compoment/create-user/create-user.component";

const routes: Routes = [
  {
    path:'',
    component: ListUserComponent
  },
  {
    path:'edit/:id',
    component: EditUserComponent
  } ,
  {
    path:'add',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
