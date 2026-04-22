import { Component } from '@angular/core';
import { Customer, CustomerServiceService } from '../../../services/customer-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
customer :Customer ={
    name:'',
    address:'',
    email:'',
    mobile:0,
    city:'',
    contact:0,
    username:'',
    password:''
}
error='';
 response='';

  constructor(private service: CustomerServiceService){}

 save(){
    this.service.register(this.customer).subscribe({
      next:(res:any)=>{
        this.response="Registration Successful";

      },
      error:(err:any)=>{
      this.error = err.error || err.message || "Registration Failed";
      console.error("Error while register",err);
    }
 })
    }
}