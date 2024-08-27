import { NgIf } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  str = "Rupesh comes form ts file  and  below img link also";
  imgpath = "assets/rupesh.JPG"
   res:any 
  result: any 
  sign:any
  fun()
  {
    this.str = "thanks you we send  Rupesh related information";
    console.log("data submitted sucessfully")
  }
  // addtion
  add( num1:any, num2:any)
  {
    
    
    this.res = parseInt(num1)+parseInt(num2);
    console.log(this.res);
    this.sign = "+"
  }
// sub
  sub( num1:any, num2:any)
  {
    this.sign = "-"
    
    this.res = parseInt(num1)-parseInt(num2);
    console.log(this.res);
  }
//mul
  mul( num1:any, num2:any)
  {
    this.sign = "*"
    
    this.res = parseInt(num1)*parseInt(num2);
    console.log(this.res);
  }
  //div
  div( num1:any, num2:any)
  {
    this.sign = "/"
    
    this.res = parseInt(num1)/parseInt(num2);
    console.log(this.res);
  }
 
 
  out()
  {
    this.res = "" ;
  }
}
