import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {RouterModule} from "@angular/router";
import {IconsProviderModule} from "./icons-provider.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { FooterOnlyLayoutComponent } from './layout/footer-only-layout/footer-only-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    PublicLayoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    PublicLayoutComponent
  ]
})
export class SharedModule { }
