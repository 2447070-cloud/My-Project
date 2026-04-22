import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterRegistrationComponent } from './service-center-registration.component';

describe('ServiceCenterRegistrationComponent', () => {
  let component: ServiceCenterRegistrationComponent;
  let fixture: ComponentFixture<ServiceCenterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCenterRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCenterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
