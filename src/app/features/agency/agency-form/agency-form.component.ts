import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../../core/models/city.model';
import { CityService } from '../../../core/services/city.service';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {
  agencyForm: FormGroup;
  cities: City[] = [];

  constructor(
    private fb: FormBuilder,
    public formService: FormService,
    private cityService: CityService
  ) {
    this.agencyForm = this.fb.group({
      name: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cityService.getAllCitiies().subscribe({
      next: (cities) => (this.cities = cities)
    });
  }

  submitForm(): void {
    console.log('submit', this.agencyForm.value);
    /*this.comapnyService.create(this.validateForm.value).subscribe({
      next: () => {
        this.message.create('success', 'Entreprise crée avec succés');
        this.router.navigateByUrl('company/list');
      },
      error: (err) => {
        console.log(err);
        this.message.create('error', err);
      }
    });*/
  }
}
