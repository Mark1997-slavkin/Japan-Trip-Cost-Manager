import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'japan-trip';
  showSplash = true;
  activeTab: 'expenses' | 'trips' = 'expenses';

  onSplashComplete(): void {
    this.showSplash = false;
  }

  setActiveTab(tab: 'expenses' | 'trips'): void {
    this.activeTab = tab;
  }
}
