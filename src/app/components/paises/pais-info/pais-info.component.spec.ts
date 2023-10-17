import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisInfoComponent } from './pais-info.component';

describe('PaisInfoComponent', () => {
  let component: PaisInfoComponent;
  let fixture: ComponentFixture<PaisInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisInfoComponent]
    });
    fixture = TestBed.createComponent(PaisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
