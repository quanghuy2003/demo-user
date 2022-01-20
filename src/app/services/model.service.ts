import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {HttpClient} from "@angular/common/http";
import {Mode} from "../model/mode";
const API_URL = 'http://localhost:8080/api/modes'

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Mode[]> {
    return this.httpClient.get<Mode[]>(API_URL);
  }

  findByIdModel(id: any):  Observable<Mode> {
    return this.httpClient.get<Mode>(API_URL+`/${id}`);

  }
}
