import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatFormFieldModule,
    MatIcon],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private authService = inject(AuthService);
  private route = inject(Router);
  loginform: FormGroup;
  hide = true;

  constructor(fb: FormBuilder) {
    this.loginform = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  submitForm() {
    this.authService.login(this.loginform.controls["username"].value, this.loginform.controls["password"].value);
  }

  register() {
    this.route.navigate(['register']);
    }
}
