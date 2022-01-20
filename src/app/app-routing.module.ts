import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./compoment/list-user/list-user.component";
import {EditUserComponent} from "./compoment/edit-user/edit-user.component";
import {CreateUserComponent} from "./compoment/create-user/create-user.component";
import {ListPostComponent} from "./compoment/list-post/list-post.component";
import {EditPostComponent} from "./compoment/edit-post/edit-post.component";

const routes: Routes = [
  {
    path:'user',
    component: ListUserComponent
  },
  {
    path:'user/edit/:id',
    component: EditUserComponent
  } ,
  {
    path:'add',
    component: CreateUserComponent
  },
  {
    path:'post',
    component: ListPostComponent
  },
  {
    path:'post/edit/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
