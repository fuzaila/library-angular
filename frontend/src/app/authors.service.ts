import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get('http://localhost:5000/authors');
  }

  singleAuthor(id){
    return this.http.get('http://localhost:5000/authors/single', {
      params:{ i: id }
    });
  }

  deleteAuthor(id:any){
    return this.http.delete('http://localhost:5000/authors/remove/'+id)
    .subscribe(data=>{console.log(data)})
  }

  newAuthor(item){
    return this.http.post('http://localhost:5000/addauthor', {'author':item})
    .subscribe(data =>{console.log(data)})
  }

  updateAuthor(id:any,item){
    return this.http.post('http://localhost:5000/authors/update/'+id,{'author':item})
    .subscribe(data=>{console.log(data)})
  }

}
