import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/interfaces/trip.interface';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-previous-trips',
  templateUrl: './previous-trips.component.html',
  styleUrls: ['./previous-trips.component.css'],
})
export class PreviousTripsComponent implements OnInit, OnDestroy {
  trips: Trip[] = [];
  private tripsSubscription!: Subscription;

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.tripsSubscription = this.tripsService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }

  ngOnDestroy(): void {
    this.tripsSubscription.unsubscribe();
  }

  deleteTrip(tripId: string): void {
    this.tripsService.deleteTrip(tripId);
  }

  getTotalUsed(trip: Trip): number {
    return trip.usedCashBudget + trip.usedCreditBudget;
  }

  getTotalBudget(trip: Trip): number {
    return trip.startingCashBudget + trip.startingCreditBudget;
  }

  getUsagePercentage(trip: Trip): number {
    const total = this.getTotalBudget(trip);
    if (total === 0) return 0;
    return Math.round((this.getTotalUsed(trip) / total) * 100);
  }
}
