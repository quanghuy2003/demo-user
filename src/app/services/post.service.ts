import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post";

const API_URL = 'http://localhost:8080/api/posts'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL);
  }

  savePost(post: Post): Observable<Post> {
    console.log(post)
    return this.httpClient.post<Post>(API_URL,post);
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(API_URL+`/${id}`,post);
  }

  deletePost(id: any):Observable<any> {
    console.log(id)
    return this.httpClient.delete(API_URL+`/${id}`)
  }


  findById(id: any):  Observable<Post> {
    return this.httpClient.get<Post>(API_URL+`/${id}`);

  }
}
