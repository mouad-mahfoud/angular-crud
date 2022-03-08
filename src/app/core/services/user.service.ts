import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private apiService: ApiService) { }

  getById(id: String): Observable<User>{
    return this.apiService.get(`users/${id}`);
  }


}
