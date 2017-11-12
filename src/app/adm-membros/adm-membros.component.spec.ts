import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMembrosComponent } from './adm-membros.component';

describe('AdmMembrosComponent', () => {
  let component: AdmMembrosComponent;
  let fixture: ComponentFixture<AdmMembrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMembrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
