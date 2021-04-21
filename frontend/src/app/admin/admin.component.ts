import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void { }
  
  admin = {
    adminemail: '',
    adminpass: ''
  };

  adminVerify()
  {
    this._auth.adminVerify(this.admin)
    .subscribe(
      res => {
        if(res.message == "Success"){
          localStorage.setItem('token', res.token)
          this._router.navigate(['admindash'])
        }
        if(res.message == "Failed")
        {
          alert("Invalid email and password. Please try again.")
          this._router.navigate(['admin'])
        }
      }
    )
  }

}
