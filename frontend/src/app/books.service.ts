import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient ) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }

  newBook(item){
    return this.http.post<any>("http://localhost:3000/addbook", { book: item})
  }

  updateBook(item){
    return this.http.post("http://localhost:3000/updatebook", { book: item})
    .subscribe(data => {console.log(data)})
  }

  deleteBook(item){
    return this.http.post("http://localhost:3000/deletebook", { book: item})
    .subscribe(data => {console.log(data)})
  }

  newAuthor(item){
    return this.http.post<any>("http://localhost:3000/addauthor", { author: item})
  }

  updateAuthor(item){
    return this.http.post("http://localhost:3000/updateauthor", { author: item})
    .subscribe(data => {console.log(data)})
  }

  deleteAuthor(item){
    return this.http.post("http://localhost:3000/deletebook", { author: item})
    .subscribe(data => {console.log(data)})
  }

}
