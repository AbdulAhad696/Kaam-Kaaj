import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidOverlayComponent } from './bid-overlay.component';

describe('BidOverlayComponent', () => {
  let component: BidOverlayComponent;
  let fixture: ComponentFixture<BidOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
