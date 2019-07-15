// dans html

<mat-form-field class="full-width">
        <mat-chip-list #ingredientsList>

          <!-- Selected ingredients -->
          <mat-chip
            *ngFor="let ingredient of selectedIngredients"
            [removable]="true"
            (removed)="removeIngredient(ingredient)"
          >
            {{ ingredient.nom }}
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>

          <!-- Input -->
          <input
            placeholder="Les ingredients"
            #ingredientInput
            formControlName="ingredients"
            [matChipInputFor]="ingredientsList"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            [matChipInputAddOnBlur]="true"
            (matChipInputTokenEnd)="addIngredient($event)"
          />

         </mat-chip-list>
      </mat-form-field>

//dans le composant du formulaire
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatChipList} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


//propriété de class form
separatorKeysCodes: number[] = [ENTER, COMMA];
  public selectedIngredients = [];

  //build form
  private buildForm() {
    this.smoothieForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      title: ['', Validators.required()],
      ingredients: [[]],
    });
  }

  //fonction pour gerer les données du tableaux d'ingrédients
  public addIngredient(event: MatChipInputEvent): void {

    const input = event.input;
    const value = event.value;

    if (!(value || '').trim()) {
      return;
    }

    // Create a new tag
    this.selectedIngredients.push({
      nom: value.trim(),
      quantite: '',
    });
    // Update form with selected ingredient

    this.myForm.ingredients.setValue(this.selectedIngredients);

    if (input) {
      input.value = '';
    }

    this.myForm.ingredients.setValue(null);
  }

  public removeIngredient(ingredient: any): void {
    const index = this.selectedIngredients.indexOf(ingredient);

    if (index >= 0) {
      this.selectedIngredients.splice(index, 1);
      // Update form with selected ingredients
      this.myForm.ingredients.setValue(this.selectedIngredients);
    }
  }