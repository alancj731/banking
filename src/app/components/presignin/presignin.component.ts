import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from  '@angular/router'
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-presignin',
  standalone: true,
  imports: [SignupComponent, SigninComponent, CommonModule],
  templateUrl: './presignin.component.html',
  styleUrl: './presignin.component.css'
})
export class PresigninComponent implements OnInit {
  constructor(private router:Router){}
  url: string = '';

  ngOnInit(): void {
    this.url = this.router.url;
  }
}
