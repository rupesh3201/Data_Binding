import { NgIf } from '@angular/common';
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
  res =0
  result =0
  fun()
  {
    this.str = "thanks you we send  Rupesh related information";
    console.log("data submitted sucessfully")
  }
  
  add( num1:any, num2:any)
  {
    
    
    this.res = parseInt(num1)+parseInt(num2);
    console.log(this.res);
    
  }
}
