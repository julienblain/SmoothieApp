import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmoothieService, Smoothie } from '../smoothie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private smoothie: Smoothie;
  private smoothieId;
  private urlImg = "http://localhost:3000/";

  constructor(private route: ActivatedRoute, private smoothieService: SmoothieService) {
    
   
   }

  ngOnInit() {
    this.smoothieId = this.route.snapshot.paramMap.get('id');
    this.getSmoothiesDetail();
    
  }

  setSmoothieId(idS) {
    this.smoothieId = idS ;
  }

  getSmoothieId(): any {
    return this.smoothieId;
  }

    setSmoothie(mSmooth) {
      this.smoothie = mSmooth;
    }

    getSmoothie(): any {
      return this.smoothie;
    }

  getSmoothiesDetail(): void {
    this.smoothieService.getOneSmoothie(this.smoothieId)
      .subscribe((smoothieDetail) => {
        this.smoothie = smoothieDetail;
        console.log(this.smoothie);
      });
  }
}
