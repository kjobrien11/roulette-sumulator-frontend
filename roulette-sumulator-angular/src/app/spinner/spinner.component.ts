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
  currentColor: 'black' | 'red' | 'green' | null = null;
  spinId = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['current_spin']) {
      this.startSpin(this.current_spin.color);
    }
  }

  startSpin(color: 'black' | 'red' | 'green') {
    this.currentColor = color;
    
    this.isSpinning = false;
    this.currentColor = null;

    setTimeout(() => {
      this.isSpinning = true;
      this.currentColor = color;
    }, 50);
  }
}
