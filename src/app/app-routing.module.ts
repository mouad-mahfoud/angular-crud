import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './shared/layout/footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          )
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./features/company/company.module').then(
            (m) => m.CompanyModule
          )
      },
      {
        path: 'agents',
        loadChildren: () =>
          import('./features/agents/agents.module').then((m) => m.AgentsModule)
      },
      {
        path: 'agencies',
        loadChildren: () =>
          import('./features/agency/agency.module').then((m) => m.AgencyModule)
      }
    ]
  },
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule)
  },
  { path: '403', component: UnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
