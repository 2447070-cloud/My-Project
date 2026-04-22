import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomerServiceService, ILogin } from '../../../services/customer-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest: ILogin = {
    email: '',
    password: ''
  };

  error = '';

  constructor(
    private service: CustomerServiceService,
    private router: Router
  ) {}

  login() {
    console.log("Login clicked");

    this.service.login(this.loginRequest).subscribe({
      next: (res: any) => {
        console.log("Login Success", res);

        
        localStorage.setItem('customer', JSON.stringify(res));

        
        this.router.navigate(['/customer/home']);
      },
      error: (err) => {
        console.log("Login Failed", err);
        this.error = "Invalid email or password";
      }
    });
  }
}