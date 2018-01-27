import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenciasSemanaisComponent } from './pendencias-semanais.component';

describe('PendenciasSemanaisComponent', () => {
  let component: PendenciasSemanaisComponent;
  let fixture: ComponentFixture<PendenciasSemanaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendenciasSemanaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendenciasSemanaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
