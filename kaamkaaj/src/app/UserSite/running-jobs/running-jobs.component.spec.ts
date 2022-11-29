import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningJobsComponent } from './running-jobs.component';

describe('RunningJobsComponent', () => {
  let component: RunningJobsComponent;
  let fixture: ComponentFixture<RunningJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
