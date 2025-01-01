import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDialogueEditComponent } from './vol-dialogue-edit.component';

describe('VolDialogueEditComponent', () => {
  let component: VolDialogueEditComponent;
  let fixture: ComponentFixture<VolDialogueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolDialogueEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolDialogueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
