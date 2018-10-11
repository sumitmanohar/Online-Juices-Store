import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

getdata:any

  constructor(private _router:Router,private http:HttpService) { }

  ngOnInit() {
 this.getdata=this.http.getData()
 console.log(this.getdata)
  }

logout():any{
  this._router.navigate(['/home'])
  for(let i=0;i<this.getdata.length;i++){
    this.getdata[i].quantity=0
  }
  this.http.setData(this.getdata)
  this.http.titleZero()
   
  

}

}
