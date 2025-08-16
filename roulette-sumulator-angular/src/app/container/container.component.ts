import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinsComponent } from '../spins/spins.component';
import { StatsComponent } from '../stats/stats.component';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-container',
  imports: [SpinnerComponent, SpinsComponent, StatsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  
  data:any;

  constructor(private rouletteService: ServiceService) {}

  ngOnInit(): void {
    this.rouletteService.getStats().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
