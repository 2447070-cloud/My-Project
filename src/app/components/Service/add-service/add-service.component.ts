import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddServiceService } from '../../../services/add-service.service';


@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  // 🟢 FIX: added serviceCenterId
  service = {
    serviceName: '',
    rate: '',
    serviceCenterId: Number(localStorage.getItem('centerId')) || 0
  };

  serviceList: any[] = [];

  selectedServiceId: number | null = null;

  isEditMode: boolean = false;

  constructor(private serviceApi: AddServiceService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  // 🔄 Load services
  loadServices() {
    const centerId = localStorage.getItem('centerId');

    if (!centerId) {
      alert("Center ID missing");
      return;
    }

    this.serviceApi.getServices(centerId).subscribe({
      next: (res: any) => this.serviceList = res,
      error: (err: any) => console.log(err)
    });
  }

  // 🧹 Add New (reset form)
  addNew() {
    this.service = {
      serviceName: '',
      rate: '',
      serviceCenterId: Number(localStorage.getItem('centerId')) || 0
    };
    this.selectedServiceId = null;
    this.isEditMode = false;
  }

  // ➕ SAVE
  onSubmit() {

    if (!this.service.serviceName.trim()) {
      alert("Service Name required");
      return;
    }

    if (!this.service.rate || Number(this.service.rate) <= 0) {
      alert("Valid rate required");
      return;
    }

    this.serviceApi.addService(this.service).subscribe({
      next: () => {
        alert("Saved ✅");
        this.loadServices();
        this.addNew();
      },
      error: (err: any) => console.log(err)
    });
  }

  // ✏️ SELECT
  selectService(s: any) {
    this.service = {
      serviceName: s.serviceName,
      rate: s.rate,
      serviceCenterId: s.servicecenter?.id || Number(localStorage.getItem('centerId'))
    };
    this.selectedServiceId = s.id;
    this.isEditMode = true;
  }

  // 🔄 UPDATE
  update() {
    if (!this.selectedServiceId) {
      alert("Select service first");
      return;
    }

    this.serviceApi.updateService(this.selectedServiceId, this.service).subscribe({
      next: () => {
        alert("Updated ✅");
        this.loadServices();
        this.addNew();
      },
      error: (err: any) => console.log(err)
    });
  }

  // ❌ DELETE
  delete() {
    if (!this.selectedServiceId) {
      alert("Select service first");
      return;
    }

    this.serviceApi.deleteService(this.selectedServiceId).subscribe({
      next: () => {
        alert("Deleted ❌");
        this.loadServices();
        this.addNew();
      },
      error: (err: any) => console.log(err)
    });
  }

  // ❌ CANCEL
  cancel() {
    this.addNew();
  }
}