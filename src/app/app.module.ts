import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { FloatingScreenComponent } from './components/floating-screen/floating-screen.component';
import { PreviousTripsComponent } from './components/previous-trips/previous-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpenseListComponent,
    FloatingScreenComponent,
    PreviousTripsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
