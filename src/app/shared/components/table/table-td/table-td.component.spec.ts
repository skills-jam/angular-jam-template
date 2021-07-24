import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTdComponent } from './table-td.component';

describe('TableTdComponent', () => {
  let component: TableTdComponent;
  let fixture: ComponentFixture<TableTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
