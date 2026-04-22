import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './service-center-layout.component.html',
  styleUrl: './service-center-layout.component.css'
})
export class ServiceLayoutComponent implements OnInit {

  serviceCenter: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const store = localStorage.getItem('serviceCenter');
    this.serviceCenter = store ? JSON.parse(store) : null;
  }

  logout() {
    localStorage.removeItem('serviceCenter');
    this.router.navigate(['/login']);
  }

}