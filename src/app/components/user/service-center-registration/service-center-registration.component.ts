import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ServiceCenterService, ServiceCenter } from '../../../services/service-center-registration.service';

@Component({
  selector: 'app-service-center',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './service-center-registration.component.html',
  styleUrl: './service-center-registration.component.css'
})
export class ServiceCenterComponent {

  service: ServiceCenter = {
    serviceCenterName: '',
    email: '',
    password: '',
    location: '',
    serviceTime: '',
    serviceType: '',
    contactNumber: '',
    address: '',
    image: ''
  };

  error = '';
  success = '';
  imgPreview: any;

  constructor(private serviceApi: ServiceCenterService) {}

  // ✅ UPDATED IMAGE HANDLER
  onImageSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    // ✅ Allow up to 10MB (you can increase if needed)
    if (file.size > 10 * 1024 * 1024) {
      alert("Image size should be less than 10MB");
      return;
    }

    // ✅ Compress image before converting to Base64
    const img = new Image();
    const canvas = document.createElement('canvas');
    const reader = new FileReader();

    reader.onload = (e: any) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const ctx = canvas.getContext('2d');

      // 🔽 Reduce resolution (70%)
      const scale = 0.7;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 🔽 Compress quality (0.7)
      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);

      this.imgPreview = compressedBase64;
      this.service.image = compressedBase64;
    };

    reader.readAsDataURL(file);
  }

  // ✅ SUBMIT
  onSubmit() {
    this.serviceApi.register(this.service).subscribe({
      next: () => {
        this.success = "Registration Successful ✅";
        this.error = "";

        this.service = {
          serviceCenterName: '',
          email: '',
          password: '',
          location: '',
          serviceTime: '',
          serviceType: '',
          contactNumber: '',
          address: '',
          image: ''
        };

        this.imgPreview = null;
      },
      error: (err: any) => {
        console.log(err);
        this.error = err.error?.message || "Registration Failed ❌";
      }
    });
  }
}