import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookietest } from './cookietest';

describe('Cookietest', () => {
  let component: Cookietest;
  let fixture: ComponentFixture<Cookietest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cookietest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cookietest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
