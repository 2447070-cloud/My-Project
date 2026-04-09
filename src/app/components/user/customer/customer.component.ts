import { Component } from '@angular/core';
import { Customer, CustomerServiceService } from '../../../services/customer-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customer:Customer={
    name:'',
    address:'',
    city:'',
    contact:0,
    email:'',
    password:''
  }

  error='';

  constructor(private service:CustomerServiceService){
  }

  save(){
     this.service.register(this.customer).subscribe({
      next:(res:Customer)=>{
          alert("Resgisted...!!!");
      },
      error:(err)=>{
       this.error = err.error||err.message ||  "Resgitrration Failed";
       console.error("Error while regsiter",err);
      }
     })
  }
}
