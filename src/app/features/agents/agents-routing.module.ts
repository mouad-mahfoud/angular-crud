import { RouterModule } from '@angular/router';
import { Role } from './../../core/enums/role.enum';
import { HasRoleGuard } from './../../core/guards/has-role.guard';
import { AuthGuard } from './../../core/guards/auth.guard';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: 'list',
        component: AgentsListComponent,
        canActivate: [AuthGuard, HasRoleGuard],
        data: {
            role: Role.ROLE_COMPANY_ADMIN
        }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgentsRoutingModule {}