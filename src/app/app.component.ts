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
  fun()
  {
    this.str = "thanks you we send  Rupesh related information";
    console.log("data submitted sucessfully")
  }
}
