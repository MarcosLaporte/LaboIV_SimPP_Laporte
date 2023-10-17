import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDatosComponent } from './actor-datos.component';

describe('ActorDatosComponent', () => {
  let component: ActorDatosComponent;
  let fixture: ComponentFixture<ActorDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorDatosComponent]
    });
    fixture = TestBed.createComponent(ActorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
