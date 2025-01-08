import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesManageComponent } from './airlines-manage.component';

describe('AirlinesManageComponent', () => {
  let component: AirlinesManageComponent;
  let fixture: ComponentFixture<AirlinesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlinesManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlinesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
