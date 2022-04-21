import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AllCompaniesPagination } from '../models/company.model';
import { HttpParams } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  resource = 'cities';

  constructor(private apiService: ApiService) {}

  getAllCitiies(): Observable<City[]> {
    return this.apiService.get<City[]>(this.resource);
  }
}
