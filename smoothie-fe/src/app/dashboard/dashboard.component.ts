import { Component, OnInit, Input } from '@angular/core';

@Component({ //decorateur design patern, ca cree une balise html
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() smoothie: string;

  title: string;
  private _subTitle: string;
  
  constructor() {
    
  }

  ngOnInit() { //life cirle hook, se fair à la signature
    this.setTitle();
  }

  setTitle(): void {
    this.title = 'Bienvenue sur Smoothie en folie';
    this.subTitle = ('La référence pour vos recettes de Smoothie');
  }

  set subTitle(nTitle: string){
    this._subTitle = nTitle;
  }
  get subTitle(): string {
    return this._subTitle;
  }

}
