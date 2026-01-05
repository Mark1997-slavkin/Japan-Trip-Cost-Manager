import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private currentBudget$: BehaviorSubject<number>;
  private creditBudget$: BehaviorSubject<number>;
  private startingCashBudget$: BehaviorSubject<number>;
  private startingCreditBudget$: BehaviorSubject<number>;

  constructor(private localStorageService: LocalStorageService) {
    this.currentBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('currentBudget') ?? 0,
    );
    this.creditBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('creditBudget') ?? 0,
    );
    this.startingCashBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('startingCashBudget') ?? 0,
    );
    this.startingCreditBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('startingCreditBudget') ?? 0,
    );
  }

  private getBudgetConfig(isCredit: boolean) {
    return {
      budget$: isCredit ? this.creditBudget$ : this.currentBudget$,
      key: isCredit ? 'creditBudget' : 'currentBudget',
    };
  }

  setBudget(amount: number, isCredit: boolean = false): void {
    const { budget$, key } = this.getBudgetConfig(isCredit);
    this.localStorageService.setItem(key, amount);
    budget$.next(amount);

    // Also set starting budget if this is initial setup
    const startingKey = isCredit
      ? 'startingCreditBudget'
      : 'startingCashBudget';
    const starting$ = isCredit
      ? this.startingCreditBudget$
      : this.startingCashBudget$;
    if (amount > 0 && starting$.value === 0) {
      this.localStorageService.setItem(startingKey, amount);
      starting$.next(amount);
    } else if (amount === 0) {
      this.localStorageService.setItem(startingKey, 0);
      starting$.next(0);
    }
  }

  getBudget(isCredit: boolean = false): Observable<number> {
    const { budget$ } = this.getBudgetConfig(isCredit);
    return budget$.asObservable();
  }

  subtractFromBudget(amount: number, isCredit: boolean = false): void {
    const { budget$, key } = this.getBudgetConfig(isCredit);
    const newBudget = budget$.value - amount;
    this.localStorageService.setItem(key, newBudget);
    budget$.next(newBudget);
  }

  addToBudget(amount: number, isCredit: boolean = false): void {
    const { budget$, key } = this.getBudgetConfig(isCredit);
    const newBudget = budget$.value + amount;
    this.localStorageService.setItem(key, newBudget);
    budget$.next(newBudget);
  }

  getStartingBudget(isCredit: boolean = false): number {
    return isCredit
      ? this.startingCreditBudget$.value
      : this.startingCashBudget$.value;
  }

  getCurrentBudgetValue(isCredit: boolean = false): number {
    return isCredit ? this.creditBudget$.value : this.currentBudget$.value;
  }

  resetAll(): void {
    this.setBudget(0, false);
    this.setBudget(0, true);
    this.localStorageService.setItem('expenses', []);
  }
}
