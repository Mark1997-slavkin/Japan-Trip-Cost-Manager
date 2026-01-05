import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentBudget: number = 0;
  creditBudget: number = 0;
  private budgetSubscription!: Subscription;
  private creditSubscription!: Subscription;

  constructor(public budgetService: BudgetService) {}

  ngOnInit(): void {
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
    this.budgetSubscription.unsubscribe();
    this.creditSubscription.unsubscribe();
  }
}
