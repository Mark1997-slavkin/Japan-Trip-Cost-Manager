import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from '../interfaces/trip.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private trips$ = new BehaviorSubject<Trip[]>([]);

  constructor(private localStorageService: LocalStorageService) {
    const savedTrips = this.localStorageService.getItem<Trip[]>('trips') ?? [];
    this.trips$.next(savedTrips);
  }

  getTrips(): Observable<Trip[]> {
    return this.trips$.asObservable();
  }

  saveTrip(trip: Trip): void {
    const currentTrips = this.trips$.getValue();
    const updatedTrips = [trip, ...currentTrips];
    this.trips$.next(updatedTrips);
    this.localStorageService.setItem('trips', updatedTrips);
  }

  deleteTrip(tripId: string): void {
    const currentTrips = this.trips$.getValue();
    const updatedTrips = currentTrips.filter((trip) => trip.id !== tripId);
    this.trips$.next(updatedTrips);
    this.localStorageService.setItem('trips', updatedTrips);
  }

  generateTripId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
