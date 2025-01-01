import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDialogComponent } from './vol-dialog.component';

describe('VolDialogComponent', () => {
  let component: VolDialogComponent;
  let fixture: ComponentFixture<VolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
