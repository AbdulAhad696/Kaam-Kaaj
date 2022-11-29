import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingsComponent } from './bidings.component';

describe('BidingsComponent', () => {
  let component: BidingsComponent;
  let fixture: ComponentFixture<BidingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
