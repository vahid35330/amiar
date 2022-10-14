import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue1part3Component } from './issue1part3.component';

describe('Issue1part3Component', () => {
  let component: Issue1part3Component;
  let fixture: ComponentFixture<Issue1part3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue1part3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue1part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
