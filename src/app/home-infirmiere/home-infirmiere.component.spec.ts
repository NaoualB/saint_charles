import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfirmiereComponent } from './home-infirmiere.component';

describe('HomeInfirmiereComponent', () => {
  let component: HomeInfirmiereComponent;
  let fixture: ComponentFixture<HomeInfirmiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInfirmiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
