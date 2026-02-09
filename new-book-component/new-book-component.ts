import { Component, OnInit } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { Book } from '../myclasses/iBook';


@Component({
  selector: 'app-new-book-component',
  standalone: false,
  templateUrl: './new-book-component.html',
  styleUrls: ['./new-book-component.css'],
})
export class NewBookComponent implements OnInit {
  book = new Book();
  books: any[] = [];
  errMessage = '';
  okMessage = '';

  constructor(private _service: BookAPIService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err?.message || String(err);
      },
    });
  }

  postBook(): void {
  this.okMessage = '';
  this.errMessage = '';

  this._service.postBook(this.book).subscribe({
    next: () => {
      this.okMessage = 'Đã tạo sách thành công';
      this.book = new Book();
      this.loadBooks();
    },
    error: (err) => {
      this.errMessage = err?.message || String(err);
    }
  });
}
}
