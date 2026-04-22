import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCenter, ServiceCenterService } from '../../../services/service-center-registration.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-center',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.css'] 
})
export class ServiceCenterComponent implements OnInit {

  serviceCenters:ServiceCenter[]=[];

  constructor(private http: HttpClient,
    private serviceCenterService:ServiceCenterService) {}
  ngOnInit(): void {
    this.loadServiceCenters();
  }

  loadServiceCenters(){
  this.serviceCenterService.getAll().subscribe({
    next:(res)=>{
        console.log("data:",res);
        this.serviceCenters = res;
    },
    error:(err)=>{
      console.error(err);
    }
  })
  }

}
