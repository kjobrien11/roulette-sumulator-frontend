import { Component, Input,OnChanges } from '@angular/core';
import { StatsBoxComponent } from '../stats-box/stats-box.component';
import {  } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [StatsBoxComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnChanges{
  @Input() data!:any;

  ngOnChanges(){
   console.log("test")

  }

  formatOddEven(): string {
    const odd = (this.data.odd / this.data.total_spins) * 100;
    const even = (this.data.even / this.data.total_spins) * 100;
    return `${odd.toFixed(2)}%:${even.toFixed(2)}%`;
  }

  formatRedBlackGreen(): string {
    const red = (this.data.reds / this.data.total_spins) * 100;
    const black = (this.data.blacks / this.data.total_spins) * 100;
    return `${red.toFixed(2)}%:${black.toFixed(2)}%`;
  }

  formatMostCommonNumber():string {
    const mostCommon = this.data.most_common_number;
    const mostCommonAmount = this.data.most_common_count;
    return `${mostCommon} (${mostCommonAmount})`;
  }

  formatZeroRate():string{
    const zero = (this.data.zero)/ (this.data.total_spins) * 100;
    return `${zero.toFixed(2)}%`;
  }

  formatParityStreak():string{
    return this.data.current_parity_streak.parity + " ("+this.data.current_parity_streak.streak+")";
  }

  formatMaxParityStreak():string{
    return this.data.max_parity_streak.parity + " ("+this.data.max_parity_streak.streak+")";
  }

  formatColorStreak():string{
    return this.data.current_color_streak.color + " ("+this.data.current_color_streak.streak+")";
  }

  formatMaxColorStreak():string{
    return this.data.max_color_streak.color + " ("+this.data.max_color_streak.streak+")";
  }

}
