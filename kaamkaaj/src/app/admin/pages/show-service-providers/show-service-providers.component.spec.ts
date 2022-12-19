import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceProvidersComponent } from './show-service-providers.component';

describe('ShowServiceProvidersComponent', () => {
  let component: ShowServiceProvidersComponent;
  let fixture: ComponentFixture<ShowServiceProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowServiceProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
