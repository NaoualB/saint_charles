import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPatientComponent } from './ajouter-patient.component';

describe('AjouterPatientComponent', () => {
  let component: AjouterPatientComponent;
  let fixture: ComponentFixture<AjouterPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
