import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-fronted',
  templateUrl: './fronted.component.html',
  styleUrls: ['./fronted.component.css']
})
export class FrontedComponent implements OnInit {
  
    Data:any
    item:number=0
    price:number=0
    Array:any[]=[]
   count:any={}
   ind:any=0
   g:any=0
   c:any=0
   r:any=0
   o:any=0
   l:any=0
  
  
    
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.Data=this.http.getData()
    console.log(this.Data)
  //   this.child.emptyBasket()
  //  console.log(this.child.emptyBasket())
 
  }
  

  addToCart(price,title,i):any{
   console.log(i)
  this.item++

  console.log(this.item)
  this.Data[i].quantity=this.item
  this.ind=this.Data[i].quantity
  
  console.log(price)
  this.http.setTitle(title)
  this.price+=price
  this.http.setTotalPrice(this.price)
  if(i==0){
   this.g++
    this.Data[i].quantity=this.g
    console.log(this.Data)
  }else if(i==1){
    this.c++
    this.Data[i].quantity=this.c
    console.log(this.Data)
  }else if(i=2){
    this.r++
    this.Data[i].quantity=this.r
    console.log(this.Data)
  }else if(i=3){
    this.o++
    this.Data[i].quantity=this.o
    console.log(this.Data)
  }else if(i=4){
    this.l++
    this.Data[i].quantity=this.l
    console.log(this.Data)
  }
   
 
  

  }


 
  emptyBasket():any{
    this.item=0;
    this.price=0
  }
  
  removeItem(price,i,title):any{
    this.item--
    this.Data[i].quantity=this.item
    console.log(this.Data[i].quantity)
    console.log(i)
    this.ind=this.Data[i].quantity
    console.log(title)
    this.http.reduce(title)
    console.log(this.item)
    this.price-=price
    if(i==0){
      this.g--
       this.Data[i].quantity=this.g
       console.log(this.Data)
     }else if(i==1){
       this.c--
       this.Data[i].quantity=this.c
       console.log(this.Data)
     }else if(i=2){
      this.r--
      this.Data[i].quantity=this.r
      console.log(this.Data)
    }else if(i=3){
      this.o--
      this.Data[i].quantity=this.o
      console.log(this.Data)
    }else if(i=4){
      this.l--
      this.Data[i].quantity=this.l
      console.log(this.Data)
    }
  
    
  }


}
