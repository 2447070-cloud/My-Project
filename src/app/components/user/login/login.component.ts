import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomerServiceService, ILogin } from '../../../services/customer-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginRequest:ILogin={
email:'',
password:''
}
  error = '';

  constructor(private service:CustomerServiceService){}

  login(){
     this.service.login(this.loginRequest).subscribe({
      next:()=>{
        alert('login successful');
      },
      error:(err)=>{
        alert('login failed: ' +err.message || err.error);
      }
     })
  }
}
