import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceCenterService } from '../../../services/service-center.service';
import { HttpClientModule } from '@angular/common/http';
import { AddServiceService } from '../../../services/add-service.service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './servicecenter-details.component.html'
})
export class ServiceDetailsComponent implements OnInit {

  serviceId: number = 0;
  service: any = null;
  centerServicesList: any = null;
  isLoadServices=false;

  constructor(
    private route: ActivatedRoute,
    private serviceCenterService: ServiceCenterService,
    private addServiceService: AddServiceService
  ) { }

  ngOnInit(): void {
    this.isLoadServices=false;
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  loadData(): void {

    this.serviceCenterService.getById(this.serviceId).subscribe({
      next: (res) => {
        //console.log(res);
        this.service = res;
        this.addServiceService.getServices(this.serviceId).subscribe({
          next: (res) => {
            this.isLoadServices=true;
            this.centerServicesList = res;
            console.log(res);
          },
          error: (err) => {
            console.error('Error:', err);
          }
        })
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }



  addToCart(item: any): void {
    console.log('Added to cart:', item);
  }
}