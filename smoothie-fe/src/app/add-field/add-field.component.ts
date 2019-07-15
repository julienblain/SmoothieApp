import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
  containers = [];
  public in: any;
  constructor() { }

  ngOnInit() {
    this.setIn(-1);
    this.add();
  }

  add() {
    this.in++;
    this.containers.push(this.containers.length);
  }

  setIn(mIn) {
    
    this.in = mIn;
    console.log(this.in);
  }

  getIn(): any {
    return this.in;
  }
}
