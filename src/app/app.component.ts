import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event) => this.modifyHeader(event));
  }

  ngOnInit(): void {}

  modifyHeader(location: any) {
    console.log(location.url);
    if (location.url === '/app-login'
    || location.url === '/informar-email'
    || location.url === '/informar-celular'
    || location.url === '/codigo-celular') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }

  teste() {
    console.log(window.screen.width);
  }
}
