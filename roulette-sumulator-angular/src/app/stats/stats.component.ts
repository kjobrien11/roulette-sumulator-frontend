import { Component, Input,OnInit } from '@angular/core';
import { StatsBoxComponent } from '../stats-box/stats-box.component';
import {  } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [StatsBoxComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit{
  @Input() data!:any;

  ngOnInit(){
    console.log("HI",this.data)

  }

  formatOddEven(): string {
    const odd = (this.data.odd / this.data.total_spins) * 100;
    const even = (this.data.even / this.data.total_spins) * 100;
    return `${odd.toFixed(2)}%:${even.toFixed(2)}%`;
  }

  formatRedBlackGreen(): string {
    const red = (this.data.reds / this.data.total_spins) * 100;
    const black = (this.data.blacks / this.data.total_spins) * 100;
    const green = (this.data.greens / this.data.total_spins) * 100;
    return `${red.toFixed(2)}%:${black.toFixed(2)}%:${green.toFixed(2)}%`;
  }

}
