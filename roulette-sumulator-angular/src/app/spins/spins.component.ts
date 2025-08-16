import { Component } from '@angular/core';
import { RecentSpinComponent } from '../recent-spin/recent-spin.component';

@Component({
  selector: 'app-spins',
  imports: [RecentSpinComponent],
  templateUrl: './spins.component.html',
  styleUrl: './spins.component.css'
})
export class SpinsComponent {

}
