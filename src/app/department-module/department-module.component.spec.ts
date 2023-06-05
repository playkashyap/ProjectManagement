import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentModuleComponent } from './department-module.component';

describe('DepartmentModuleComponent', () => {
  let component: DepartmentModuleComponent;
  let fixture: ComponentFixture<DepartmentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
