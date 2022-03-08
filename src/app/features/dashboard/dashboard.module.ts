import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdministrationDashboardComponent } from './pages/administration-dashboard/administration-dashboard.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdministrationDashboardComponent,
    CompanyDashboardComponent,
    AgencyDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
