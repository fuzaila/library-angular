import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {

  constructor(private _auth:AuthService, private _router:Router) { }

  user = {
    useremail: '',
    userpass: ''
  };

  ngOnInit(): void { }

  userVerify()
  {
    this._auth.userVerify(this.user)
    
    .subscribe(
      res => {
        if(res.message == "Success"){
          localStorage.setItem('usertoken', res.usertoken)
          let id = res.id
          this._router.navigate(['userdash/:' + id])
        }
        if(res.message == "Failed")
        {
          alert("Invalid username and password. Please try again.")
          this._router.navigate(['/user/usersignin'])
        }
      }
    )
  }

}
