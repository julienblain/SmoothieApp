import { Injectable } from '@angular/core';
import {environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Smoothie {
  _id?: string;        // ? permet que la propriété ne soit pas obligatoire 
  title: string;
  ingredients?: [
    {
      nom?: string;
      quantité?: string;
    }];
  features?: {
    cost?: string;
    prepareTime?: string;
  };
  advice?: string;
  description?: string;
  steps?: [
    {
        stepText: string;
    }
  ];
  photo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

 // Get all Smoothie
  getSmoothies(): Observable<Smoothie[]> {        // le retour sera de type obsevable
    const smoothieListUrl = `${this.apiUrl}/catalog/list`;
    
    return this.http.get<Smoothie[]>(smoothieListUrl);
  }

  getOneSmoothie(id: String): Observable<Smoothie> {
    const getUrl = `${this.apiUrl}/catalog/${id}`;
    
    return this.http.get<Smoothie>(getUrl);
  }

  addSmoothie(): void {
    //this.http.post
  }
}
