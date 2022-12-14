import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordConponentComponent } from './change-password-conponent.component';

describe('ChangePasswordConponentComponent', () => {
  let component: ChangePasswordConponentComponent;
  let fixture: ComponentFixture<ChangePasswordConponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordConponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordConponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
