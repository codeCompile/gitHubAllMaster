import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pragim1Component } from './pragim1.component';

describe('Pragim1Component', () => {
  let component: Pragim1Component;
  let fixture: ComponentFixture<Pragim1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pragim1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pragim1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
