import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpViewjobsComponent } from './sp-viewjobs.component';

describe('SpViewjobsComponent', () => {
  let component: SpViewjobsComponent;
  let fixture: ComponentFixture<SpViewjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpViewjobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpViewjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
