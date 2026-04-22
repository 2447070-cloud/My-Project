import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterDetailsComponent } from './servicecenter-details.component';

describe('ServicecenterDetailsComponent', () => {
  let component: ServicecenterDetailsComponent;
  let fixture: ComponentFixture<ServicecenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicecenterDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
