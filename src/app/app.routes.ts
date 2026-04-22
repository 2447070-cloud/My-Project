import { Routes } from '@angular/router';

import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';

import { customerAuthGuard } from './guards/customer-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { ServiceLayoutComponent } from './layouts/service-center-layout/service-center-layout.component';
import { ServiceAuthGuard } from './guards/service-auth.guard.service';

export const routes: Routes = [


  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/user/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'enquiry',
        loadComponent: () =>
          import('./components/user/enquiry/enquiry.component')
            .then(m => m.EnquiryComponent)
      },
      {
        path: 'signUp',
        loadComponent: () =>
          import('./components/user/customer/customer.component')
            .then(m => m.CustomerComponent)
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/user/login/login.component')
            .then(m => m.LoginComponent)
      },
      {
        path: 'service-center-login',
        loadComponent: () =>
          import('./components/user/service-center-login/service-center-login.component')
            .then(m => m.ServiceLoginComponent)
      },
      {
        path: 'service-center-registration',
        loadComponent: () =>
          import('./components/user/service-center-registration/service-center-registration.component')
            .then(m => m.ServiceCenterComponent)
      },
      {
        path: 'service_center',
        loadComponent: () =>
          import('./components/customer/service-center/service-center.component')
            .then(m => m.ServiceCenterComponent)
      }
    ]
  },


  {
    path: 'customer',
    component: CustomerLayoutComponent,
    canActivate: [customerAuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/customer/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./components/customer/feedback/feedback.component')
            .then(m => m.FeedbackComponent)
      },
      {
        path: 'service_center',
        loadComponent: () =>
          import('./components/customer/service-center/service-center.component')
            .then(m => m.ServiceCenterComponent)
      },
     {
      path:'servicecenter_details/:id',
      loadComponent:()=>
        import ('./components/customer/servicecenter-details/servicecenter-details.component')
      .then(m=>m.ServiceDetailsComponent)
     }
    ]
  },


  {
    path: 'service',
    component: ServiceLayoutComponent,
    canActivate: [ServiceAuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/Service/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'add-service',
        loadComponent: () =>
          import('./components/Service/add-service/add-service.component')
            .then(m => m.AddServiceComponent)
      },

    ]
  },


  {
    path: 'admin/login',
    component: AdminLoginComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [adminAuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/admin/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./components/admin/category/category.component')
            .then(m => m.CategoryComponent)
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./components/customer/feedback/feedback.component')
            .then(m => m.FeedbackComponent)
      }
    ]
  },


  {
    path: '**',
    redirectTo: ''
  }
];