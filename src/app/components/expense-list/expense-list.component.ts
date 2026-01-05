import { LocalStorageService } from './../../services/local-storage.service';
import { BudgetService } from 'src/app/services/budget.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { TripsService } from 'src/app/services/trips.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Expense } from 'src/app/interfaces/expense.interface';
import { Trip } from 'src/app/interfaces/trip.interface';
import { Country } from 'src/app/data/countries.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  @Output() tripEnded = new EventEmitter<void>();

  listOfExpenses: Expense[] = [];
  isCreditCard: boolean = false;
  selectedCountry: Country = {} as Country;
  currentBudget: number = 0;
  creditBudget: number = 0;
  private countrySubscription!: Subscription;
  private budgetSubscription!: Subscription;
  private creditSubscription!: Subscription;

  constructor(
    private budgetService: BudgetService,
    public LocalStorageService: LocalStorageService,
    private currencyService: CurrencyService,
    private tripsService: TripsService,
  ) {}

  ngOnInit(): void {
    this.listOfExpenses =
      this.LocalStorageService.getItem<Expense[]>('expenses') ?? [];

    this.countrySubscription = this.currencyService
      .getSelectedCountry()
      .subscribe((country) => {
        this.selectedCountry = country;
      });

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
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
    this.budgetSubscription.unsubscribe();
    this.creditSubscription.unsubscribe();
  }

  addExpense(
    name: string,
    cost: number,
    nameInput: HTMLInputElement,
    costInput: HTMLInputElement,
  ): void {
    if (!name.trim()) return;
    if (!cost || cost <= 0) return;

    this.listOfExpenses.push({
      name: name.trim(),
      cost,
      isCreditCard: this.isCreditCard,
    });
    this.LocalStorageService.setItem('expenses', this.listOfExpenses);

    this.budgetService.subtractFromBudget(cost, this.isCreditCard);

    nameInput.value = '';
    costInput.value = '';
    this.isCreditCard = false;
  }

  removeExpense(index: number): void {
    const expense = this.listOfExpenses[index];

    this.budgetService.addToBudget(expense.cost, expense.isCreditCard);

    this.listOfExpenses.splice(index, 1);
    this.LocalStorageService.setItem('expenses', this.listOfExpenses);
  }

  endTrip(): void {
    const startingCash = this.budgetService.getStartingBudget(false);
    const startingCredit = this.budgetService.getStartingBudget(true);

    if (startingCash === 0 && startingCredit === 0) {
      return;
    }

    const trip: Trip = {
      id: this.tripsService.generateTripId(),
      countryName: this.selectedCountry.name,
      countryCode: this.selectedCountry.code,
      currencySymbol: this.selectedCountry.currencySymbol,
      startingCashBudget: startingCash,
      startingCreditBudget: startingCredit,
      usedCashBudget: startingCash - this.currentBudget,
      usedCreditBudget: startingCredit - this.creditBudget,
      expenses: this.listOfExpenses,
      createdAt: new Date(),
    };

    this.tripsService.saveTrip(trip);
    this.budgetService.resetAll();
    this.listOfExpenses = [];
    this.tripEnded.emit();
  }

  hasBudget(): boolean {
    return this.currentBudget > 0 || this.creditBudget > 0;
  }
}
