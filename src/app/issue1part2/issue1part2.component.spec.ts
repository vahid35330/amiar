import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue1part2Component } from './issue1part2.component';

describe('Issue1part2Component', () => {
  let component: Issue1part2Component;
  let fixture: ComponentFixture<Issue1part2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue1part2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue1part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
