import { Injectable } from '@angular/core';
import {environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Smoothie {
  _id: string;
  title: string;
  ingredients: [
    {
      nom: string;
      quantité: string;
    }];
  features: {
    eTcost: string;
    preparime: string;
  };
  advice: string;
  description: string;
  steps: [
    {
        stepText: string;
    }
  ];
  photo:[
    {
      titre: string;
      path: string;
      description: string;
    }
  ];
}

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  private apiUtl = environment.apiUrl;

  constructor(
    private htpp:HttpClient,
    private router:Router
  ) {}
}
