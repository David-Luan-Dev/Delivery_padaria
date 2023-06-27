import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(){
    this.teste()
  }
  teste(){
    console.log(
      window.screen.width
    )
 }

}
