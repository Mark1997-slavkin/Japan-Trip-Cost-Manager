import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Country } from 'src/app/data/countries.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentBudget: number = 0;
  creditBudget: number = 0;
  selectedCountry: Country = {} as Country;
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  showCountrySelector = false;
  searchQuery = '';
  budgetError = '';

  private budgetSubscription!: Subscription;
  private creditSubscription!: Subscription;
  private countrySubscription!: Subscription;

  constructor(
    public budgetService: BudgetService,
    public currencyService: CurrencyService,
  ) {}

  ngOnInit(): void {
    this.countries = this.currencyService.getAllCountries();
    this.filteredCountries = this.countries;

    this.budgetSubscription = this.budgetService
      .getBudget()
      .subscribe((budget) => {
        this.currentBudget = budget;
      });

    this.creditSubscription = this.budgetService
      .getBudget(true)
      .subscribe((budget) => {
        this.creditBudget = budget;
      });

    this.countrySubscription = this.currencyService
      .getSelectedCountry()
      .subscribe((country) => {
        this.selectedCountry = country;
      });
  }

  ngOnDestroy(): void {
    this.budgetSubscription.unsubscribe();
    this.creditSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

  openCountrySelector(): void {
    this.showCountrySelector = true;
    this.searchQuery = '';
    this.filteredCountries = this.countries;
  }

  closeCountrySelector(): void {
    this.showCountrySelector = false;
    this.searchQuery = '';
  }

  selectCountry(country: Country): void {
    this.currencyService.setSelectedCountry(country);
    this.closeCountrySelector();
  }

  filterCountries(query: string): void {
    this.searchQuery = query;
    if (!query.trim()) {
      this.filteredCountries = this.countries;
      return;
    }

    const lowerQuery = query.toLowerCase();
    this.filteredCountries = this.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowerQuery) ||
        country.currency.toLowerCase().includes(lowerQuery) ||
        country.code.toLowerCase().includes(lowerQuery),
    );
  }

  setBudgets(cashAmount: number, creditAmount: number): void {
    this.budgetError = '';

    if (cashAmount <= 0 && creditAmount <= 0) {
      this.budgetError = 'Please enter at least one budget amount';
      return;
    }

    if (cashAmount > 0) this.budgetService.setBudget(cashAmount);

    if (creditAmount > 0) this.budgetService.setBudget(creditAmount, true);
  }
}
