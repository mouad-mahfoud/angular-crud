import { HasRoleGuard } from './../../core/guards/has-role.guard';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { AdministrationDashboardComponent } from './pages/administration-dashboard/administration-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'administration',
    component: AdministrationDashboardComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: 'ROLE_SUPER_ADMIN'
    }
  },
  {
    path: 'company',
    component: CompanyDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agency',
    component: AgencyDashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
