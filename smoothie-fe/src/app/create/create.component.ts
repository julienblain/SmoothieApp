import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { Smoothie, SmoothieService } from '../smoothie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  smoothie: Smoothie = {
    title: '',/*
    ingredients: [
      {
        nom: '',
        quantité: '',
      }
      ],
    features: {
      cost: '',
      prepareTime: '',
    },
    advice: '',
    description: '',
    steps: [
      {
        stepText: '',
      }
      ],
    photo: [
      {
        title: '',
        path: '',
        description: '',
      }
      ]*/
    };

  //on cree me frpùGoup
  smoothieForm: FormGroup;
 /*
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });*/

   //importe le formBuilder
  constructor(private fb: FormBuilder, private smoothieService: SmoothieService) { }

  ngOnInit() {
    //on init le form
    this.buildForm();
  }

  get myForm() {
    return this.smoothieForm.controls;
  }

    //build le form
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', /*Validators.required*/], //input
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.addSmoothie(this.smoothie);
      // console.log(this.smoothie);
    }
  }

  addSmoothie(smoothie: Smoothie) {
    this.smoothieService.addSmoothie(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
      });
  }











/*
  initForm() {
    
      this.smoothieForm = this.fb.group({
        title: '' 
        lastName: '',
        email: '',
        drinkPreference: ''
      });
  
  }

  onSubmitForm() {
    const formValue = this.smoothieForm.value;
    const newSmoothie = new Smoothie(
      formValue['title']
     );

   let truc = this.smoothieService.addSmoothie(newSmoothie);
   console.log(truc);

    //this.router.navigate(['/users']);
  }
*/
}
