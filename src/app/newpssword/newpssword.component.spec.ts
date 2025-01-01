import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpsswordComponent } from './newpssword.component';

describe('NewpsswordComponent', () => {
  let component: NewpsswordComponent;
  let fixture: ComponentFixture<NewpsswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpsswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpsswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
