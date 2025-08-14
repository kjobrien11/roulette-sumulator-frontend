import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-stats-box',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './stats-box.component.html',
  styleUrl: './stats-box.component.css'
})
export class StatsBoxComponent {
  @Input() title!:string;
  @Input() data!:any;
  @Input() htag: string = "h1";

}
