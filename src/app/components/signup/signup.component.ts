import { Component } from '@angular/core';
import { AuthformComponent } from '../authform/authform.component';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AuthformComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
