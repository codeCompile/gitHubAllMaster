import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCount} from './employee-count.component';

describe('EmployeeCount.Component', () => {
  let component: EmployeeCount;
  let fixture: ComponentFixture<EmployeeCount>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCount ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
