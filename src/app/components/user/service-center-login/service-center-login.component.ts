import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ServiceCenterService } from '../../../services/service-center-registration.service';

@Component({
  selector: 'app-service-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './service-center-login.component.html',

  // 🔥 THIS WAS MISSING
  styleUrls: ['./service-center-login.component.css']
})
export class ServiceLoginComponent {

  loginRequest = {
    email: '',
    password: ''
  };

  error = '';

  constructor(
    private serviceApi: ServiceCenterService,
    private router: Router
  ) {}

  login() {
    this.serviceApi.login(this.loginRequest).subscribe({
      next: (res: any) => {

        if (res) {
          localStorage.setItem('Service', JSON.stringify(res));
          localStorage.setItem('centerId', res.id);
          localStorage.setItem('centerName', res.serviceCenterName);

          alert("Login Successful ✅");
          this.router.navigate(['/service/home']);

        } else {
          this.error = "Invalid Email or Password";
        }

      },
      error: () => {
        this.error = "Login Failed ❌";
      }
    });
  }
}