import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({ // decorateur design patern, ca cree une balise html
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() smoothie: string;

  private _smoothies: Smoothie[];   //return de l'interface, carton vide
  private urlImg = "http://localhost:3000/";
  private urlApp = "http://localhost:4200/";
 // title: string;
// tslint:disable-next-line: variable-name
 // private _subTitle: string;
  constructor(private smoothieService: SmoothieService) {
    this.getAllSmoothies();
  }

  ngOnInit() { // life cirle hook, se fair à la signature
   // this.setTitle();
    //this.smoothie = 'banane bleu'; // value à l'input par defaut
  }

  set smoothies(mSmoothies: any) {
    this._smoothies = mSmoothies;
  }

  get smoothies(): any {
      return this._smoothies;
  }

  getAllSmoothies(): void {
    this.smoothieService.getSmoothies().subscribe((listSmoothie) => {
        this.smoothies = listSmoothie;
       
      });
  }

  /*
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
*/
}
