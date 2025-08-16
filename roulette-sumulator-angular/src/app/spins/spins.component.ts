import { Component } from '@angular/core';
import { RecentSpinComponent } from '../recent-spin/recent-spin.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-spins',
  imports: [RecentSpinComponent, NgFor, NgClass],
  templateUrl: './spins.component.html',
  styleUrl: './spins.component.css'
})
export class SpinsComponent {

  MAX_LIST_SIZE = 5;

  spin_sample_data: any = [

    {
      "value": "29",
      "color": "black",
      "parity": "odd"
    },
    {
      "value": "3",
      "color": "red",
      "parity": "odd"
    },
    {
      "value": "7",
      "color": "red",
      "parity": "odd"
    },
    {
      "value": "33",
      "color": "black",
      "parity": "odd"
    },
    {
      "value": "00",
      "color": "green",
      "parity": "neither"
    }
  ]

  spin(){
    if(this.spin_sample_data.length +1 > this.MAX_LIST_SIZE){
      this.spin_sample_data.pop();
    }
    this.spin_sample_data.unshift({
      "value": "0",
      "color": "green",
      "parity": "neither"
    })

  }

}
