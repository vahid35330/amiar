import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Issue1orderComponent } from './issue1order.component';

describe('Issue1orderComponent', () => {
  let component: Issue1orderComponent;
  let fixture: ComponentFixture<Issue1orderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Issue1orderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Issue1orderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
