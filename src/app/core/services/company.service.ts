import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { AllCompaniesPagination, Company } from './../models/company.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComapnyService {
  resource = 'companies';

  constructor(private apiService: ApiService) {}

  getAllCompanies(pageIndex: number, pageSize: number): Observable<AllCompaniesPagination> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('limit', `${pageSize}`);
    return this.apiService.get<AllCompaniesPagination>(this.resource, params);
  }
  
  create(company: Company): Observable<Company> {
    return this.apiService.post<Company>(this.resource, company);
  }
}
