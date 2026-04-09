/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryComponent } from './enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EnquiryComponent', () => {
  let component: EnquiryComponent;
  let fixture: ComponentFixture<EnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryComponent,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
  expect(component).toBeTruthy();
});
});


