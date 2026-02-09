import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detai-component',
  standalone: false,
  templateUrl: './book-detai-component.html',
  styleUrl: './book-detai-component.css',
})
export class BookDetaiComponent {
  book:any;
errMessage:string=''
constructor(private _service: BookAPIService, private router:Router, private activeRouter:ActivatedRoute){
  activeRouter.paramMap.subscribe((params)=>{
    let id=params.get("id")
    if(id!=null)
    {
      this.searchBook(id)
    }
})
}
searchBook(bookId:string)
{
this._service.getBook(bookId).subscribe({
next:(data)=>{this.book=data},
error:(err)=>{this.errMessage=err}
})
}
view_detail(bookId:any)
{
  this.router.navigate(["ex41",bookId])
}
}
