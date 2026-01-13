import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Exercise10Component } from './exercise10';

describe('Exercise10Component', () => {
  let component: Exercise10Component;
  let fixture: ComponentFixture<Exercise10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10Component],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Exercise10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
