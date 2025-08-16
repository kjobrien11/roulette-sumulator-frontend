import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  imports: [NgClass]
})
export class SpinnerComponent {
  isSpinning = false;

  startSpin() {
    this.isSpinning = false;
    setTimeout(() => {
      this.isSpinning = true;
    });
  }

  stopSpin() {
    this.isSpinning = false;
  }
}
