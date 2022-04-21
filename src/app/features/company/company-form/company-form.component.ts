import { Router } from '@angular/router';
import { ComapnyService } from './../../../core/services/company.service';
import { Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private comapnyService: ComapnyService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      address: ['', [Validators.required]],
      manager: this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirm: ['', [this.confirmValidator]]
      })
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.comapnyService.create(this.validateForm.value).subscribe({
      next: () => {
        this.message.create('success', 'Entreprise crée avec succés');
        this.router.navigateByUrl('company/list');
      },
      error: (err) => {
        console.log(err);
        this.message.create('error', err);
      }
    });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (
      control.value !== this.validateForm.get('manager.password')?.value
    ) {
      return { confirm: true, error: true };
    }
    return {};
  };

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.validateForm.get('manager.confirm')?.updateValueAndValidity()
    );
  }
}
