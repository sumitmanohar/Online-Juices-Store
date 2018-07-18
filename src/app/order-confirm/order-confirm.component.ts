import { Component,Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Title } from '../../../node_modules/@angular/platform-browser';





@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

 
   totalPrice:number
   Title:any[]=[]
   Delivery:any
   allData:any[]=[]
   index:number
   currentData:any[]=[]
   Array:any[]=[]
   count:any={}
   Array1:any[]=[]
   TotalCoast:number
   finalPrice:number=0
   constructor(private http: HttpService) { 
     
   }
  ngOnInit() {
    console.log(this.http.getDataDelivery())
    this.Delivery=this.http.getDataDelivery()
    this.allData=this.http.getData()
    this.totalPrice=this.http.getTotalPrice()
    console.log(this.http.getTitle())
    this.Title=this.http.getTitle()
    this.getItem()
    this.getSelectedelement();
    
    
  }
    
  getSelectedelement():any{
    this.Title.forEach(element => {
      console.log(element)
      for(let i=0;i<this.allData.length;i++){
      if(this.allData[i].title==element){
        console.log(element)
        console.log(i)
        this.index=i;
        this.currentData.push(this.allData[this.index])
        for(let x in this.count){
          if(element==x){
            console.log(this.count[x])
            this.TotalCoast=this.count[x]*this.currentData[i].price
            console.log(this.TotalCoast)
            this.currentData[this.index].quantity=this.count[x]
            this.currentData[this.index].totalPrice=this.TotalCoast
            console.log(this.currentData)
            // this.http.setData(this.currentData)
            // this.http.setData(this.index,this.count[x])


          }
        }
     

      }
    }
    });
  }
 
 getItem():any{
  this.Array=this.http.getItem()
  let count=this.count
  this.Array.forEach(function(i) {count[i] = (count[i]||0) + 1;});
  console.log(this.count)
  
 
 }
 shifInCharge(price):any{
  
   this.totalPrice-=this.finalPrice
 this.totalPrice+=price
  this.finalPrice=price
 }


}
