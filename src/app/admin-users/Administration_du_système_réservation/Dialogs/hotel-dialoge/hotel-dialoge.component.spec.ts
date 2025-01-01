import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDialogeComponent } from './hotel-dialoge.component';

describe('HotelDialogeComponent', () => {
  let component: HotelDialogeComponent;
  let fixture: ComponentFixture<HotelDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDialogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
