import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FrontedComponent } from './fronted/fronted.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontedComponent,
   
    OrderConfirmComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:FrontedComponent,pathMatch:'full'},
      {path:'order',component:OrderConfirmComponent},
      {path:'logout',component:CheckOutComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:FrontedComponent}
    ]),
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
