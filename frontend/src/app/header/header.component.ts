import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService, public _router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    if(this._auth.userlogged){
      localStorage.removeItem('usertoken')
    this._router.navigate([''])
    }
    if(this._auth.adminlogged)
    {
      localStorage.removeItem('token')
    this._router.navigate([''])
    }
  }
}
