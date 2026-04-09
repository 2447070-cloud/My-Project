import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:UserLayoutComponent,
        children:[
            {path:'',loadComponent:()=>import('./components/user/home/home.component').then(m=>m.HomeComponent)},
            {path:'enquiry',loadComponent:()=>import('./components/user/enquiry/enquiry.component').then(n=>n.EnquiryComponent)},
            {path:'signUp',loadComponent:()=>import('./components/user/customer/customer.component').then(m=>m.CustomerComponent)},
            {path:'login',loadComponent:()=> import('./components/user/login/login.component').then(m=>m.LoginComponent)}

        ]
    }
];
