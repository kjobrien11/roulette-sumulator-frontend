import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  imports: [NgClass]
})
export class SpinnerComponent {
  isSpinning = false;
  isSettling = false;

  startSpin() {
    this.isSpinning = false;

    setTimeout(() => {
      this.isSpinning = true;

  });
}
}
