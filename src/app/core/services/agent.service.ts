import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  resource = 'agents';

  constructor(private apiService: ApiService, private jwtService: JwtService) {}

  getAgentsByCompanyAdmin(
    pageIndex: number,
    pageSize: number
  ): Observable<any> {
    const companyPublicId = this.jwtService.getUserInfo().CompanyDto.publicId;
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('limit', `${pageSize}`);
    return this.apiService.get(`${this.resource}/${companyPublicId}`, params);
  }
}
12;
9;
9;
9;
