import { Component, OnInit, Input } from '@angular/core';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-smoothie',
  templateUrl: './smoothie.component.html',
  styleUrls: ['./smoothie.component.css']
})
export class SmoothieComponent implements OnInit {

  private _smoothies: Smoothie[];
  
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
}
