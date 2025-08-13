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

}
