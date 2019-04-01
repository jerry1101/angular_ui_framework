import { Component } from '@angular/core';
import { MatLabel } from '@angular/material'
import { FormBuilder, FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { StaticSymbolResolver } from '@angular/compiler';
import { stateList,vendorList } from './mockdata'
import { State } from './state'
import { Vendor } from './vendor'



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  states: State[] = stateList;
  vendors: Vendor[] = vendorList;
  selectedState: string = "";
  selectedVendor: string = "";
  filteredStates: State[] = this.states;

  orderNumberFC = new FormControl('', [Validators.required, Validators.pattern('[^a-zA-Z]*')]);
  onTextChange() {
    console.log(this.orderNumberFC.value);
  }


  stateFC = new FormControl('', [
    Validators.required,
  ]);

  myForm = this.builder.group({
    area: this.stateFC
  });
  constructor(private builder: FormBuilder) { };

  search(query: string) {
    console.log('query', query)
    let result = this.select(query)
    this.filteredStates = result;
  }

  select(query: string): State[] {
    let result: State[] = [];
    for (let s of this.states) {
      if (s.name.toLowerCase().indexOf(query) > -1) {
        result.push(s)
      }
    }
    return result
  }

}
