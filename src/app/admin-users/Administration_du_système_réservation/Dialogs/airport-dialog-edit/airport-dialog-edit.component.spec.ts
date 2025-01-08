import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDialogEditComponent } from './airport-dialog-edit.component';

describe('AirportDialogEditComponent', () => {
  let component: AirportDialogEditComponent;
  let fixture: ComponentFixture<AirportDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportDialogEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
