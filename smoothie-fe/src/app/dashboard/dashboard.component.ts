import { Component, OnInit } from '@angular/core';

@Component({ //decorateur design patern, ca cree une balise html
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  constructor() {
    this.setTitle();
  }

  ngOnInit() { //life cirle hook, se fair à la signature
  }

  setTitle(): void {
    this.title = 'Bienvenue sur Smoothie en folie';
  }

}
