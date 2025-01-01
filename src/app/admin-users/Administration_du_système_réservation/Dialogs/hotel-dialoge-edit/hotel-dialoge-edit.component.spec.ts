import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDialogeEditComponent } from './hotel-dialoge-edit.component';

describe('HotelDialogeEditComponent', () => {
  let component: HotelDialogeEditComponent;
  let fixture: ComponentFixture<HotelDialogeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDialogeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDialogeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
