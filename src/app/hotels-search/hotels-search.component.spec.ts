import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSearchComponent } from './hotels-search.component';

describe('HotelsSearchComponent', () => {
  let component: HotelsSearchComponent;
  let fixture: ComponentFixture<HotelsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
