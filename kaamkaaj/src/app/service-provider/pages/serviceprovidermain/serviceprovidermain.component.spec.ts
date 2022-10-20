import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovidermainComponent } from './serviceprovidermain.component';

describe('ServiceprovidermainComponent', () => {
  let component: ServiceprovidermainComponent;
  let fixture: ComponentFixture<ServiceprovidermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceprovidermainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceprovidermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
