import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActionContainerComponent } from './member-action-container.component';

describe('MemberActionContainerComponent', () => {
  let component: MemberActionContainerComponent;
  let fixture: ComponentFixture<MemberActionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberActionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
