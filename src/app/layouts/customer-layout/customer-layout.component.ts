import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Customer } from '../../services/customer-service.service';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent implements OnInit {

   customer:Customer|null=null;

   constructor(private router:Router){}

  ngOnInit(): void {
    const store = localStorage.getItem('customer');
    this.customer = store ? JSON.parse(store) : null;
  }

  logout(){
    localStorage.removeItem('customer');
    this.router.navigate(['/']);
  }

}
