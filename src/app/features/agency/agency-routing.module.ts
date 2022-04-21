import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { HasRoleGuard } from '../../core/guards/has-role.guard';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { Role } from '../../core/enums/role.enum';
import { AgencyFormComponent } from './agency-form/agency-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: AgencyListComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: Role.ROLE_COMPANY_ADMIN
    }
  },
  {
    path: 'add',
    component: AgencyFormComponent,
    canActivate: [AuthGuard, HasRoleGuard],
    data: {
      role: Role.ROLE_COMPANY_ADMIN
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule {}
