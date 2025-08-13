import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinsComponent } from '../spins/spins.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-container',
  imports: [SpinnerComponent, SpinsComponent, StatsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
