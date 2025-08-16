import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SpinsComponent } from '../spins/spins.component';
import { StatsComponent } from '../stats/stats.component';
import { ServiceService } from '../services/service.service';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [SpinnerComponent, SpinsComponent, StatsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit, OnDestroy {
  private interval: any;
  spin:any;
  data:any;

  constructor(private rouletteService: ServiceService) {}

  ngOnInit(): void {
    this.spinWheel();
    this.interval = setInterval(() => {
      this.spinWheel();
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  spinWheel(){
    this.rouletteService.getSpin().subscribe((data) => {
      console.log(data);
      this.spin = data;
    });
    this.rouletteService.getStats().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  

}
