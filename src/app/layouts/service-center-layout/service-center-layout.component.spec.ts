import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterLayoutComponent } from './service-center-layout.component';

describe('ServiceCenterLayoutComponent', () => {
  let component: ServiceCenterLayoutComponent;
  let fixture: ComponentFixture<ServiceCenterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCenterLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCenterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
