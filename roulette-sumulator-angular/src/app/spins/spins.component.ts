import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RecentSpinComponent } from '../recent-spin/recent-spin.component';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-spins',
  imports: [RecentSpinComponent, NgFor, NgClass],
  templateUrl: './spins.component.html',
  styleUrl: './spins.component.css'
})
export class SpinsComponent implements OnChanges {
@Input() current_spin!: any;
  MAX_LIST_SIZE = 5;

  spin_sample_data: any = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['current_spin']) {
      this.spin(changes['current_spin'].currentValue);
    }
  }

  spin(spin:any){
    if(this.spin_sample_data.length +1 > this.MAX_LIST_SIZE){
      this.spin_sample_data.pop();
    }
    this.spin_sample_data.unshift({
      "value": spin.value,
      "color": spin.color,
      "parity": spin.parity
      })
    console.log("SPIN")
  }

}
