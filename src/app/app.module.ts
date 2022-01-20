import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListUserComponent } from './compoment/list-user/list-user.component';
import { EditUserComponent } from './compoment/edit-user/edit-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateUserComponent } from './compoment/create-user/create-user.component';
import { ListPostComponent } from './compoment/list-post/list-post.component';
import { EditPostComponent } from './compoment/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    EditUserComponent,
    CreateUserComponent,
    ListPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
