import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue4Component } from './issue4.component';

describe('Issue4Component', () => {
  let component: Issue4Component;
  let fixture: ComponentFixture<Issue4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
