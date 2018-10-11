import { Injectable } from '@angular/core';
import { Title } from '../../node_modules/@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   product:any=[{id:'image3' ,title:'greens',content:'Looking for simple, clean and green? Four of the most nutrient dense leafy greens create the base in our low-sugar Greens 1.',price:45,ingredients:['cucumber (50%)', 
    'celery (20%)', 
    'apple (20%) ',
    'lemon (10%)' ],quantity:0,totalPrice:1 },
    {id:'image4',title:'citrus',content:'This enzyme rich juice is filled with phytonutrients and bromelin which helps to reduce inflammation. Drink it before a meal to get digestive juices flowing.',price:50,ingredients:['pineapple (50%)', 
      'apple (20%)', 
      'mint (20%)', 
      'lemon (10%)' ],quantity:0,totalPrice:1 },
      {id:'image1', title:'roots',content:'Beets help your body to release stomach acid which aids digestion! Drink this juice when you want a snack thats both pretty and nutritious!',price:55,ingredients:['apple (50%)', 
        'beetroot (20%)', 
        'ginger (20%) ',
        'lemon (10%)' ],quantity:0,totalPrice:1 },
        {id:'image5',title:'orange',content:'Orange juice with a twist to boost you health!',price:60,ingredients:['orange (50%)' ,
          'lemon (20%)', 
          'apple (20%)', 
          'tumeric (10%)' ],quantity:0,totalPrice:1 },
          {id:'image2',title:'cocount',content:'Cinnamon lovers - this is your blend! Two nutritional powerhouses combine in a delicious, satiating elixir. Both cinnamon and coconut have been shown to reduce blood sugar. Raw coconut meat is a great source of medium chain fatty acids, which can lower bad cholesterol. Coconut also contains significant levels of fiber and manganese, a mineral that helps you metabolize fat and protein.',price:65,ingredients:['Coconut (70%)', 
            'Cinnamon (20%)', 
            'water (10%)' ],quantity:0,totalPrice:1 }]


            delivery:any=[{type:'drone',content:'Get your package within an hour and have it flown in by a drone!',price:500},
                            {type:'express',content:'The quickest of the normal delivery service',price:300},
                          {type:'standard',content:'Standard shipping can take up to 4 days',price:200},
                        {type:'pick-up',content:'Pick it up tomorrow from you local post office',price:0}]
  
  totalprice:number
 Title:number[]=[]
 item:number=0
 Item:any[]=[]
 duplicate:any[]=[]
  constructor() { }
  // setData(quan,i):any{
  //   this.product[i].quantity=quan
  //   console.log(this.product[i].quantity)
  //   }
  titleZero():any{
    this.Title=[]
  }
  getData():any{
    return this.product
  }
  setData(data):any{
    this.product=data
  }
  getDataDelivery():any{
    return this.delivery
  }

  getTotalPrice():any{
    return this.totalprice
  }
  setTotalPrice(price):any{
    this.totalprice=price
  }
  setTitle(title):any{

this.Title.push(title)
console.log(this.Title)
 }
 reduce(title):any{
  console.log(title)
 let con=true
  this.Title.forEach((element,i)=>{
    
    
      
  
    if(element===title){
     if(con){
    console.log(title+element)
    console.log(i)
    con=false
   
    this.Title.splice(i,1)
    }
  }
  
  })
  console.log(this.Title)
  

}

  getItem():any{
    return this.Title
  }
  getTitle():any{
    let unique_array = Array.from(new Set(this.Title))
    return unique_array
  }
  // reduce(title):any{
  //   console.log(title)
  //   this.Title.forEach((element,i)=>{
  //     if(element==title){
  //       this.Title.splice(i,1)

  //     }
  //   })
  //   console.log(this.Title)
    

  // }
  // getItem():any{
  //   return this.Title
  // }
  
}
