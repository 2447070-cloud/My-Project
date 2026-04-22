import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const ServiceAuthGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const Service = localStorage.getItem('Service');
  if (Service) {
    return true;
  }
  else{
    return router.navigate(['/']);
  }
};
