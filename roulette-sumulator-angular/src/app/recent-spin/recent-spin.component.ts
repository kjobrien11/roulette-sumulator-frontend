import { Component, Input } from '@angular/core';


export type COLOR = "red" | "black" | "green";

export const COLOR_MAP: Record<COLOR, string> = {
  red: "#FF0000",
  black: "#000000",
  green: "#008000"
};
@Component({
  selector: 'app-recent-spin',
  imports: [],
  templateUrl: './recent-spin.component.html',
  styleUrl: './recent-spin.component.css'
})
export class RecentSpinComponent {
  @Input() value!: string;
  @Input() color!: COLOR;

  get displayColor(): string {
    return COLOR_MAP[this.color];
  }
}
