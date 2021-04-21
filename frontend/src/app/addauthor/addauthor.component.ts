import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorsModel } from '../authors/authors.model';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  title: String = "Add Author";

  constructor(private BooksService: BooksService, private _router: Router, private ActivatedRoute: ActivatedRoute) { }

  authorItem = new AuthorsModel(null, null, null, null);

  ngOnInit(): void {
  }

  addAuthor()
  {
    if(confirm("Add author?"))
    { 
      this.BooksService.newAuthor(this.authorItem, )
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
