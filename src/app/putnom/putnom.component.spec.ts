import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutnomComponent } from './putnom.component';

describe('PutnomComponent', () => {
  let component: PutnomComponent;
  let fixture: ComponentFixture<PutnomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutnomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutnomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
