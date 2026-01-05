import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country, COUNTRIES, DEFAULT_COUNTRY } from '../data/countries.data';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private selectedCountry$: BehaviorSubject<Country>;

  constructor(private localStorageService: LocalStorageService) {
    const savedCountryCode =
      this.localStorageService.getItem<string>('selectedCountry');
    const savedCountry = savedCountryCode
      ? COUNTRIES.find((c) => c.code === savedCountryCode)
      : null;

    this.selectedCountry$ = new BehaviorSubject<Country>(
      savedCountry || DEFAULT_COUNTRY,
    );
  }

  getSelectedCountry(): Observable<Country> {
    return this.selectedCountry$.asObservable();
  }

  getCurrentCountry(): Country {
    return this.selectedCountry$.value;
  }

  setSelectedCountry(country: Country): void {
    this.localStorageService.setItem('selectedCountry', country.code);
    this.selectedCountry$.next(country);
  }

  getAllCountries(): Country[] {
    return COUNTRIES;
  }

  getCurrencySymbol(): string {
    return this.selectedCountry$.value.currencySymbol;
  }
}
