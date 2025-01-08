import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDialogEditComponent } from './airline-dialog-edit.component';

describe('AirlineDialogEditComponent', () => {
  let component: AirlineDialogEditComponent;
  let fixture: ComponentFixture<AirlineDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineDialogEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
