import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators, FormArray } from '@angular/forms';
import { Smoothie, SmoothieService } from '../smoothie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  smoothie: Smoothie = {
    title: '',
    ingredients: [
      {
        nom: '',
        quantity: '',
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
    photo: '',
    };

  // on cree me frpùGoup
  smoothieForm: FormGroup;
 
   // importe le formBuilder
  constructor(private fb: FormBuilder, private smoothieService: SmoothieService) { }

  ngOnInit() {
    // on init le form
    this.buildForm();
  }

  get myForm() {
    return this.smoothieForm.controls;
  }

    // build le form with front validators
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required], // input, le retirer pour test le validator be
      cost: ['', Validators.required],
      prepareTime: ['', Validators.required],
      ingredientName: ['', Validators.required],
      ingredientQuantity: ['', Validators.required],
      advice: ['', Validators.required],
      description: ['', Validators.required],
      step: ['', Validators.required],
      photo: ['']
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.smoothieForm.invalid) {
      return;
    } else {
      this.smoothie.title = this.myForm.title.value;
      this.smoothie.features.cost = this.myForm.cost.value;
      this.smoothie.features.prepareTime = this.myForm.prepareTime.value;
      this.smoothie.ingredients[0].nom = this.myForm.ingredientName.value;
      this.smoothie.ingredients[0].quantity = this.myForm.ingredientQuantity.value;
      this.smoothie.advice = this.myForm.advice.value;
      this.smoothie.description = this.myForm.description.value;
      this.smoothie.steps[0].stepText = this.myForm.step.value;
      this.addSmoothie(this.smoothie);
    }
  }

  addSmoothie(smoothie: Smoothie) {
    this.smoothieService.addSmoothie(smoothie)
      .subscribe( (lastInsertSmoothie) => {
        console.log('smoothie inséré', lastInsertSmoothie);
      });
  }
  
}
