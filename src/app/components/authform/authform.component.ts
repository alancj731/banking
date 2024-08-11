import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSchema, UserForm } from 'src/lib/form.schema';
import { z } from 'zod';
import { FormitemComponent } from '../formitem/formitem.component';
import { Router } from '@angular/router';
import { SignIn, SignUp } from 'src/lib/auth';

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

  constructor(private fb: FormBuilder, private router: Router) {
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
      return false;
    }
    try {
      if (this.type === 'sign-in') {
        // Sign in user
        console.log('sign in a user', formData);
        const response = await SignIn(formData);
        console.log('SignIn response:', response);
      } else {
        // Sign up user
        console.log('sign up for a user', formData);
        const response = await SignUp(formData);
        console.log('SignIn response:', response);
      }

      return true;
    } catch (error) {
      console.log('Error:', error);
      return false;
    }
  };

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
