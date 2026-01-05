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

  setBudget(amount: number, isCredit: boolean = false): void {
    const key = isCredit ? 'creditBudget' : 'currentBudget';
    const budget$ = isCredit ? this.creditBudget$ : this.currentBudget$;
    this.localStorageService.setItem(key, amount);
    budget$.next(amount);
  }

  getBudget(isCredit: boolean = false): Observable<number> {
    return isCredit ? this.creditBudget$.asObservable() : this.currentBudget$.asObservable();
  }

  subtractFromBudget(amount: number, isCredit: boolean = false): void {
    const budget$ = isCredit ? this.creditBudget$ : this.currentBudget$;
    const key = isCredit ? 'creditBudget' : 'currentBudget';
    const newBudget = budget$.value - amount;
    this.localStorageService.setItem(key, newBudget);
    budget$.next(newBudget);
  }

  addToBudget(amount: number, isCredit: boolean = false): void {
    const budget$ = isCredit ? this.creditBudget$ : this.currentBudget$;
    const key = isCredit ? 'creditBudget' : 'currentBudget';
    const newBudget = budget$.value + amount;
    this.localStorageService.setItem(key, newBudget);
    budget$.next(newBudget);
  }
}
