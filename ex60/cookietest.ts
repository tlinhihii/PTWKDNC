import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cookietest',
  standalone: false,
  templateUrl: './cookietest.html',
  styleUrl: './cookietest.css',
})
export class Cookietest {
 result: string = '';

  constructor(private http: HttpClient) { }

  createCookie() {
    this.http.get('http://localhost:3002/create-cookie', { responseType: 'text', withCredentials: true }).subscribe({
      next: (res) => this.result = res,
      error: (err) => this.result = 'Error: ' + err.message
    });
  }

  readCookie() {
    this.http.get('http://localhost:3002/read-cookie', { responseType: 'text', withCredentials: true }).subscribe({
      next: (res) => this.result = res,
      error: (err) => this.result = 'Error: ' + err.message
    });
  }

  createLimitedCookie() {
    this.http.get('http://localhost:3002/create-limited-cookie', { responseType: 'text', withCredentials: true }).subscribe({
      next: (res) => this.result = res,
      error: (err) => this.result = 'Error: ' + err.message
    });
  }

  clearCookie() {
    this.http.get('http://localhost:3002/clear-cookie', { responseType: 'text', withCredentials: true }).subscribe({
      next: (res) => this.result = res,
      error: (err) => this.result = 'Error: ' + err.message
    });
  }

}
