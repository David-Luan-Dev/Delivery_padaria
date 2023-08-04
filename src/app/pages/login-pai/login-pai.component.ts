import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-pai',
  templateUrl: './login-pai.component.html',
  styleUrls: ['./login-pai.component.scss']
})
export class LoginPaiComponent implements OnInit{
  width: number = 0;
  innerWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.getScreenSize();
 }
}
