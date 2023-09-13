import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { EditModalComponent } from './edit-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


describe('EditModalComponent', () => {
  let component: EditModalComponent;
  let fixture: ComponentFixture<EditModalComponent>;

  beforeEach(() => { // This is the only block that runs before any other block (it). 
    TestBed.configureTestingModule({
      imports: [EditModalComponent],
      providers: [NgbActiveModal]
    }).compileComponents();
    fixture = TestBed.createComponent(EditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create', inject([NgbActiveModal], () => {
  //   fixture = TestBed.createComponent(EditModalComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // }));
});
