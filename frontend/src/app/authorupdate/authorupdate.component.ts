import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html',
  styleUrls: ['./authorupdate.component.css']
})
export class AuthorupdateComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute, private BooksService: BooksService, private _router: Router ) { }

  author = {
    _id : '',
    name : '',
    country : '',
    genre : '',
    img : ''
  }

  updateAuthor(author){
    if(confirm("Are you sure you want to make the changes?")){
      this.BooksService.updateAuthor(author);
      alert("Author details are updated!");
      // this._router.navigate(['./']);
      location.reload();
    }
  }

  ngOnInit(): void {

      this.ActivatedRoute.queryParams
        .subscribe(params => {
          this.author._id = params['_id'];
          this.author.name = params['name'];
          this.author.country = params['country'];
          this.author.genre = params['genre'];
          this.author.img = params['img'];
          console.log(this.author);
        })

        
  }


}
