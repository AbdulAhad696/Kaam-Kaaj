import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBalanceModalComponent } from './pay-balance-modal.component';

describe('PayBalanceModalComponent', () => {
  let component: PayBalanceModalComponent;
  let fixture: ComponentFixture<PayBalanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBalanceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
