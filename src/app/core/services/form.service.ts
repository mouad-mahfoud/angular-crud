import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {}

  resetForm(e: MouseEvent, formGrop: FormGroup): void {
    e.preventDefault();
    formGrop.reset();
    for (const key in formGrop.controls) {
      if (formGrop.controls.hasOwnProperty(key)) {
        formGrop.controls[key].markAsPristine();
        formGrop.controls[key].updateValueAndValidity();
      }
    }
  }
}
