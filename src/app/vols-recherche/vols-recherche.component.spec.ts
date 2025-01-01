import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsRechercheComponent } from './vols-recherche.component';

describe('VolsRechercheComponent', () => {
  let component: VolsRechercheComponent;
  let fixture: ComponentFixture<VolsRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolsRechercheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
