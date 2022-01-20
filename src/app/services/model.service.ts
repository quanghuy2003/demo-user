import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../model/post";
import {HttpClient} from "@angular/common/http";
import {Model} from "../model/model";
const API_URL = 'http://localhost:8080/api/modes'

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Model[]> {
    return this.httpClient.get<Model[]>(API_URL);
  }

  findByIdModel(id: any):  Observable<Model> {
    return this.httpClient.get<Model>(API_URL+`/${id}`);

  }
}
