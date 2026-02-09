import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetaiComponent } from './book-detai-component';

describe('BookDetaiComponent', () => {
  let component: BookDetaiComponent;
  let fixture: ComponentFixture<BookDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetaiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
