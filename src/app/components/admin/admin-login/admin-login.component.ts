import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService, IAdmin } from '../../../services/admin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
cancel() {
throw new Error('Method not implemented.');
}
loginRequest:IAdmin={
  username:'',
  password:''
}
message='';
isLoading=false;

constructor(private adminService:AdminService,private router:Router){}

  login(){
    this.isLoading=true;
     this.adminService.login(this.loginRequest).subscribe({
      next:(res:any)=>{
        this.isLoading=false
        alert("Login Success");
        localStorage.setItem('admin',JSON.stringify(res));
        this.router.navigate(['/admin/dashboard']);

      },
      error:(err)=>{
        this.isLoading=false;
        this.message="Invalid username password";
        console.error("login failed",err);
      }
  })
}
}
