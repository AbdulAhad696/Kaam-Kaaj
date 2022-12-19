import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProjectModalComponent } from './submit-project-modal.component';

describe('SubmitProjectModalComponent', () => {
  let component: SubmitProjectModalComponent;
  let fixture: ComponentFixture<SubmitProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProjectModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
