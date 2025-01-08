import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpotsManageComponent } from './airpots-manage.component';

describe('AirpotsManageComponent', () => {
  let component: AirpotsManageComponent;
  let fixture: ComponentFixture<AirpotsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirpotsManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirpotsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
