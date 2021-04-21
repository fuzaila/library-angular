import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private BooksService: BooksService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }
  
  title:String = "Books list";

  books = [{
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : ''
  }]

  user = { userid : '' }


  showShortDesciption = true

 alterDescriptionText(book) {
    this.showShortDesciption = !this.showShortDesciption
 }

  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
              console.log(this.user.userid)
        })

    this.BooksService.getBooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
  })
  }

  deleteBook(book)
  {
    if(confirm("Are you sure to delete?"))
    {
      this.BooksService.deleteBook(book);
      console.log("Delete called");
      alert("Deleted book");
      location.reload();
    }
  }

}
