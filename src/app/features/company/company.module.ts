import { ReactiveFormsModule } from '@angular/forms';
import { NgZoroModule } from './../../ng-zoro.module';
import { CompanyRoutingModule } from './company-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';

@NgModule({
  declarations: [CompaniesListComponent, CompanyFormComponent],
  imports: [CommonModule, CompanyRoutingModule, NgZoroModule, ReactiveFormsModule]
})
export class CompanyModule {}
