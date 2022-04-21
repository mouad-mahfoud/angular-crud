import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addAgency() {
    this.router.navigateByUrl('agencies/add');
  }
}
