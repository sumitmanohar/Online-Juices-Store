import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

logout():any{
  this._router.navigate(['/home'])
  location.reload();
  // this.router.navigate(['/heroes']);

}

}
