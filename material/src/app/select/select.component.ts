import { Component} from '@angular/core';
import {MatLabel} from '@angular/material'

export interface Food {
  code: string;
  name: string;
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
foods : Food[] = [
  {code: 'steak-0', name: 'Steak'},
    {code: 'pizza-1', name: 'Pizza'},
    {code: 'tacos-2', name: 'Tacos'}
]


}
