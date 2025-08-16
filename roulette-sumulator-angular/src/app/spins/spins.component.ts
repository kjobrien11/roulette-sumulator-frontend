import { Component } from '@angular/core';
import { RecentSpinComponent } from '../recent-spin/recent-spin.component';

@Component({
  selector: 'app-spins',
  imports: [RecentSpinComponent],
  templateUrl: './spins.component.html',
  styleUrl: './spins.component.css'
})
export class SpinsComponent {

  spin_sample_data: any = [
    {
      "value": "33",
      "color": "black",
      "parity": "odd"
    },
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
      "value": "00",
      "color": "green",
      "parity": "neither"
    }
  ]

}
