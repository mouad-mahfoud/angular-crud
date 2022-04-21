import { User } from './../../../core/models/user.model';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Router } from '@angular/router';
import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../core/services/agent.service';
import { AllCompaniesPagination } from '../../../core/models/company.model';

@Component({
  selector: 'app-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.scss']
})
export class AgentsListComponent implements OnInit {
  total = 1;
  listOfCompanies: User[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  constructor(private agentService: AgentService, private router: Router) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize);
  }

  loadDataFromServer(pageIndex: number, pageSize: number): void {
    this.loading = true;
    /*this.agentService
      .getAgentsByCompanyAdmin(pageIndex, pageSize)
      .subscribe((data: AllCompaniesPagination) => {
        this.loading = false;
        this.total = data.total;
        this.listOfCompanies = data.result;
      });*/
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadDataFromServer(pageIndex, pageSize);
  }

  addAgent() {
    this.router.navigateByUrl('agents/add');
  }
}
