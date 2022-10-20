import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomermainpageComponent } from './customermainpage.component';

describe('CustomermainpageComponent', () => {
  let component: CustomermainpageComponent;
  let fixture: ComponentFixture<CustomermainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomermainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
