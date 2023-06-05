import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionModuleComponent } from './position-module.component';

describe('PositionModuleComponent', () => {
  let component: PositionModuleComponent;
  let fixture: ComponentFixture<PositionModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
