import { Component, OnInit } from '@angular/core';
import { UsersModel } from './users.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UsersService: UsersService, private _router: Router) { }

  userItem = new UsersModel(null, null, null, null);
  user = {userpass : ''};

  ngOnInit(): void {
  }

  addUser()
  {

    if(confirm("Create your accout?"))
    {
      this.UsersService.newUser(this.userItem)
      .subscribe(
        res => {
          if(res.message == "Success"){
            alert("Sigup successful. Please login.")
            this._router.navigate(['/user/usersignin'])
          }
          if(res.message == "Failed")
          {
            alert("User already exists. Please trying logging into your account")
            this._router.navigate(['/user/usersignin'])
          }
        }
      )
    }
    
  }

}
