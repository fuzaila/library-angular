import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute ) { }

  userid = { id : '' }
  ngOnInit(): void {
    this.userid.id = this.ActivatedRoute.snapshot.params['_id']
  }

}
