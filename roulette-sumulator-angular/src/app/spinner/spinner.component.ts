import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  imports: [NgClass, NgIf]
})
export class SpinnerComponent implements OnChanges {
  @Input() current_spin!: any;
  isSpinning = false;
  currentColor: 'black' | 'red' | 'green' | null = null;
  showBall:boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['current_spin']) {
      this.startSpin(this.current_spin.color);
    }
  }

  startSpin(color: 'black' | 'red' | 'green') {
    this.currentColor = color;
    
    this.isSpinning = false;
    this.currentColor = null;
    this.showBall = false;

    setTimeout(() => {
      this.isSpinning = true;
      this.currentColor = color;
    }, 50);

    setTimeout(() => {
      this.showBall = true;
    }, 4500);

    
  }
}
