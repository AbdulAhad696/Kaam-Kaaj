import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSPModalComponent } from './edit-spmodal.component';

describe('EditSPModalComponent', () => {
  let component: EditSPModalComponent;
  let fixture: ComponentFixture<EditSPModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSPModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSPModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
