import { Role } from './../../../../core/enums/role.enum';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { JwtService } from '../../../../core/services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: NzMessageService,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.attemptAuth(this.loginForm.value).subscribe({
        next: (user) => {
          // save the user in local storage
          this.jwtService.saveUserInfo(user);
          this.messageService.create('success', 'connecté');
          if (this.authService.hasRole(Role.ROLE_SUPER_ADMIN)) {
            this.router.navigateByUrl('/dashboard/administration');
          }
          if (this.authService.hasRole(Role.ROLE_COMPANY_ADMIN)) {
            this.router.navigateByUrl('/dashboard/company');
          }
        },
        error: (error) => console.log(error)
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
