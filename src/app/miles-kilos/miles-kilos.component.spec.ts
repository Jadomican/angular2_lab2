/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MilesKilosComponent } from './miles-kilos.component';

describe('MilesKilosComponent', () => {
  let component: MilesKilosComponent;
  let fixture: ComponentFixture<MilesKilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilesKilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilesKilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
