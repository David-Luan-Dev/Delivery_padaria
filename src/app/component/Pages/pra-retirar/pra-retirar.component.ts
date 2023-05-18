import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pra-retirar',
  templateUrl: './pra-retirar.component.html',
  styleUrls: ['./pra-retirar.component.scss']
})
export class PraRetirarComponent {
  book: any = {
    title: "Game of Trones",
    author: "fulado de tal",
    isbn: 123
  }
  readonly ROOT_URL = 'https://my-json-server.typicode.com/';
  
  posts: any;

  constructor( private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }
}
