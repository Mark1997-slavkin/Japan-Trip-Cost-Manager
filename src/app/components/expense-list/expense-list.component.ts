import { LocalStorageService } from './../../services/local-storage.service';
import { BudgetService } from 'src/app/services/budget.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense.interface';
import { Country } from 'src/app/data/countries.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  listOfExpenses: Expense[] = [];
  isCreditCard: boolean = false;
  selectedCountry: Country = {} as Country;
  private countrySubscription!: Subscription;

  constructor(
    private BudgetService: BudgetService,
    public LocalStorageService: LocalStorageService,
    private currencyService: CurrencyService,
  ) {}

  ngOnInit(): void {
    this.listOfExpenses =
      this.LocalStorageService.getItem<Expense[]>('expenses') ?? [];

    this.countrySubscription = this.currencyService
      .getSelectedCountry()
      .subscribe((country) => {
        this.selectedCountry = country;
      });
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
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

    this.BudgetService.subtractFromBudget(cost, this.isCreditCard);

    nameInput.value = '';
    costInput.value = '';
    this.isCreditCard = false;
  }

  removeExpense(index: number): void {
    const expense = this.listOfExpenses[index];

    this.BudgetService.addToBudget(expense.cost, expense.isCreditCard);

    this.listOfExpenses.splice(index, 1);
    this.LocalStorageService.setItem('expenses', this.listOfExpenses);
  }
}
