import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceeComponent } from './succee.component';

describe('SucceeComponent', () => {
  let component: SucceeComponent;
  let fixture: ComponentFixture<SucceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucceeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
