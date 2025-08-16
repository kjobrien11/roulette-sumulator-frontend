import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  imports: [NgClass]
})
export class SpinnerComponent implements OnChanges {
  @Input() current_spin!: any;
  isSpinning = false;
  isSettling = false;
  isBlack = false;
  isRed = false;
  isGreen = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['current_spin']) {
      this.startSpin(this.current_spin.color);
    }
  }

  startSpin(color: string) {
    console.log("INSIDE with", color)
    if (color == "black") {
      this.isBlack = true;
      this.isRed = false;
      this.isGreen = false;
    } else if (color == "red") {
      this.isBlack = false;
      this.isRed = true;
      this.isGreen = false;
    } else if (color == "green") {
      this.isBlack = false;
      this.isRed = false;
      this.isGreen = true;
    }
    this.isSpinning = false;

    setTimeout(() => {
      this.isSpinning = true;

    });
  }
}
