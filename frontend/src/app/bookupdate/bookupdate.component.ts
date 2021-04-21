import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute, private BooksService: BooksService, private _router: Router ) { }

  book = {
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : '',
    image : ''
  }

  updateBook(book){
    if(confirm("Are you sure you want to make the changes?")){
      this.BooksService.updateBook(book);
      alert("Book details are updated!");
      // this._router.navigate(['./']);
      location.reload();
    }
  }

  ngOnInit(): void {

      this.ActivatedRoute.queryParams
        .subscribe(params => {
          console.log(params);
          this.book._id = params['_id'];
          this.book.title = params['title'];
          this.book.author = params['author'];
          this.book.genre = params['genre'];
          this.book.description = params['description'];
          this.book.image = params['image'];
        })
        
  }

}
