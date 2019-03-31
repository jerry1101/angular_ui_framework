import { Component } from '@angular/core';
import { MatLabel } from '@angular/material'
import { FormControl, Validators, PatternValidator } from '@angular/forms';

export interface State {
  code: string;
  name: string;
}
export interface Vendor {
  code: string;
  name: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  orderNumberFC = new FormControl('',[Validators.required,Validators.pattern('[^a-zA-Z]*')]);
  onTextChange() {
    console.log(this.orderNumberFC.value);
  }
  states: State[] = [
    { code: 'MD', name: 'Maryland' },
    { code: 'FL', name: 'Florida' },
    { code: 'NY', name: 'New York' }
  ]
  vendors: Vendor[] = [
    { code: '001', name: 'John-Wine-FL' },
    { code: '002', name: 'Mary-Wine-FL' },
    { code: '003', name: 'Kevin-Asso-FL' }
  ]

}
