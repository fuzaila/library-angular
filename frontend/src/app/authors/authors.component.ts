import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor( private BooksService: BooksService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }

  title:String = "Authors list";

  authors = [{
    _id : '',
    name : '',
    country : '',
    genre : '',
    img : ''
  }]

  user = { userid : '' }


  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
              console.log(this.user.userid)
        })

    this.BooksService.getAuthors().subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })

  }

}
