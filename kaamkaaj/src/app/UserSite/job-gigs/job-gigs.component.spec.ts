import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGigsComponent } from './job-gigs.component';

describe('JobGigsComponent', () => {
  let component: JobGigsComponent;
  let fixture: ComponentFixture<JobGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
