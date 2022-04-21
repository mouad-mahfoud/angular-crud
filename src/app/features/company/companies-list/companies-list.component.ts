import { Router } from '@angular/router';
import { ComapnyService } from './../../../core/services/company.service';
import { Component, OnInit } from '@angular/core';
import {
  AllCompaniesPagination,
  Company
} from './../../../core/models/company.model';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  total = 1;
  listOfCompanies: Company[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  constructor(private comapnyService: ComapnyService, private router: Router) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize);
  }

  loadDataFromServer(pageIndex: number, pageSize: number): void {
    this.loading = true;
    this.comapnyService
      .getAllCompanies(pageIndex, pageSize)
      .subscribe((data: AllCompaniesPagination) => {
        this.loading = false;
        this.total = data.total;
        this.listOfCompanies = data.result;
      });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadDataFromServer(pageIndex, pageSize);
  }

  addCompany() {
    this.router.navigateByUrl('company/add');
  }
}
