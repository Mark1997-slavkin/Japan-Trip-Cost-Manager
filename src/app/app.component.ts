import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'japan-trip';
  showSplash = true;

  onSplashComplete(): void {
    this.showSplash = false;
  }
}
