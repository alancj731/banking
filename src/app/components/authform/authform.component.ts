import {
  Component,
  Input,
  Injectable,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSchema, UserForm } from 'src/lib/form.schema';
import { z } from 'zod';
import { FormitemComponent } from '../formitem/formitem.component';
import { Router } from '@angular/router';
import { SignIn, SignUp } from 'src/lib/auth';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_ID } from 'src/constants/index';
import { getUser } from 'src/lib/user';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-authform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormitemComponent],
  templateUrl: './authform.component.html',
  styleUrl: './authform.component.css',
})
export class AuthformComponent {
  myForm: FormGroup;
  formErrors: any = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      dateOfBirth: [''],
      ssn: [''],
      email: [''],
      password: [''],
    });
  }
  onSubmit = async () => {
    const formData: UserForm<'sign-in' | 'sign-up'> = this.myForm.value;

    try {
      // Validate form data using Zod schema
      UserSchema(this.type).parse(formData);
      this.formErrors = {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log('Form data is invalid');
        this.formErrors = error.format();
      }
    }
    try {
      if (this.type === 'sign-in') {
        const response = await SignIn(formData);
        this.handleSignInResponse(response);
        // const loggedInUser = await this.getLoggedInUser();
        // console.log('Logged in user:', loggedInUser);
        // if (loggedInUser) {
        //   this.user = loggedInUser;
        // }
      } else {
        const response = await SignUp(formData);
        this.handleSignUpResponse(response);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  setCookie(key: string, value: string, days: number) {
    this.cookieService.set(key, value, days);
  }

  handleSignInResponse(response: any) {
    if (response) {
      this.setCookie(SESSION_ID, response.data.secret, 1);
      this.user = response.data;
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  handleSignUpResponse(response: any) {
    if (response) {
      // response.data is the newly created user
      const newUser = response.data;
      this.user = newUser;
      return true;
    }
    return false;
  }

  async getLoggedInUser() {
    const token = this.cookieService.get(SESSION_ID);
    if (!token || token === '') {
      console.log('No session found');
      return null;
    }
    return await getUser(token);
  }

  @Input() type: 'sign-in' | 'sign-up' = 'sign-in';
  user: unknown = null;
  getTitle() {
    return this.user
      ? 'Link Account'
      : this.type === 'sign-in'
      ? 'Sign In'
      : 'Sign Up';
  }
}
