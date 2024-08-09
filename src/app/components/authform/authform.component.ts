import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSchema, UserForm } from 'src/lib/form.schema';
import { z } from 'zod';
import { FormitemComponent } from '../formitem/formitem.component';
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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      state: [''],
      postalCode: [''],
      dateOfBirth: [''],
      ssn: [''],
      email: [''],
      password: [''],
    });
  }
  onSubmit() {

    const formData: UserForm<'sign-in' | 'sign-up'> = this.myForm.value;
    
    try {
      // Validate form data using Zod schema
      UserSchema(this.type).parse(formData);
      console.log('Form data is valid');
      this.formErrors = {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log('Form data is invalid');
        this.formErrors = error.format();
      }
    }
  }

  @Input() type: 'sign-in' | 'sign-up' = 'sign-in';
  user: any = null;
  getTitle() {
    return this.user
      ? 'Link Account'
      : this.type === 'sign-in'
      ? 'Sign In'
      : 'Sign Up';
  }
}
