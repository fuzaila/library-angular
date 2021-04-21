import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient ) { }

  newUser(item){
    return this.http.post<any>("http://localhost:3000/adduser", { user: item })
  }

  getMyReviews(userid){
    return this.http.post<any>("http://localhost:3000/myreview", { user: userid })
  }

  addReview(review, bookid, userid){
    
    var info = {
      userid: userid,
      book: bookid,
      review: review
    }
    return this.http.post<any>("http://localhost:3000/updatereview", { user: info })
  }
}
