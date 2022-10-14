import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue7Component } from './issue7.component';

describe('Issue7Component', () => {
  let component: Issue7Component;
  let fixture: ComponentFixture<Issue7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
