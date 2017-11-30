import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingAcceptComponent } from './waiting-accept.component';

describe('WaitingAcceptComponent', () => {
  let component: WaitingAcceptComponent;
  let fixture: ComponentFixture<WaitingAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
