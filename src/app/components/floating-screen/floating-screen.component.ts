import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-screen',
  templateUrl: './floating-screen.component.html',
  styleUrls: ['./floating-screen.component.css'],
})
export class FloatingScreenComponent implements OnInit {
  @Output() splashComplete = new EventEmitter<void>();

  showFirstScreen = true;
  showSecondScreen = false;
  fadeOutFirst = false;
  fadeOutSecond = false;

  constructor() {}

  async ngOnInit(): Promise<void> {
    await this.delay(4000);
    this.fadeOutFirst = true;
    await this.delay(500);
    this.showFirstScreen = false;
    this.showSecondScreen = true;
    await this.delay(4000);
    this.fadeOutSecond = true;
    await this.delay(500);
    this.showSecondScreen = false;
    this.splashComplete.emit();
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
