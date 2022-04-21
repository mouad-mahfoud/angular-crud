import { CompanyFormComponent } from './company-form/company-form.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { HasRoleGuard } from './../../core/guards/has-role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CompaniesListComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: 'ROLE_SUPER_ADMIN'
    }
  },
  {
    path: 'add',
    component: CompanyFormComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: 'ROLE_SUPER_ADMIN'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
