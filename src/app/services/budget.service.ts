import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private currentBudget$: BehaviorSubject<number>;
  private creditBudget$: BehaviorSubject<number>;

  constructor(private localStorageService: LocalStorageService) {
    this.currentBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('currentBudget') ?? 0,
    );
    this.creditBudget$ = new BehaviorSubject<number>(
      this.localStorageService.getItem<number>('creditBudget') ?? 0,
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
}
