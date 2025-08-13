import { Component } from '@angular/core';
import { StatsBoxComponent } from '../stats-box/stats-box.component';

@Component({
  selector: 'app-stats',
  imports: [StatsBoxComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

}
