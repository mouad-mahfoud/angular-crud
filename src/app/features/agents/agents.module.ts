import { NgZoroModule } from './../../ng-zoro.module';
import { AgentsRoutingModule } from './agents-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsListComponent } from './agents-list/agents-list.component';



@NgModule({
  declarations: [
    AgentsListComponent
  ],
  imports: [
    CommonModule,
    AgentsRoutingModule,
    NgZoroModule
  ]
})
export class AgentsModule { }
