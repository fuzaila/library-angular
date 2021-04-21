import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksModel } from '../books/books.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {
  title: String = "Add Book";

  constructor(private BooksService: BooksService, private _router: Router, private ActivatedRoute: ActivatedRoute) { }

  bookItem = new BooksModel(null, null, null, null, null, null);

  ngOnInit(): void {
   }

  addBook()
  {
    if(confirm("Add book?"))
    { 
      this.BooksService.newBook(this.bookItem, )
      .subscribe(
        res => {
          if(res.message == "Success"){
            alert("Successfullly added")
            this._router.navigate(['/admindash/books'])
          }
          if(res.message == "Failed")
          {
            alert("Book ISBN already exists. Please check again.")
            this._router.navigate(['/admindash/addbook'])
          }
        }
      )
    }
  }

  
}
