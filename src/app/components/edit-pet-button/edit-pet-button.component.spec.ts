import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPetButtonComponent } from './edit-pet-button.component';

describe('EditPetButtonComponent', () => {
  let component: EditPetButtonComponent;
  let fixture: ComponentFixture<EditPetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPetButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
