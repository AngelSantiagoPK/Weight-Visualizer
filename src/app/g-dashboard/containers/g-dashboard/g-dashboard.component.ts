import { Component } from '@angular/core';
import { Plate } from '../../models/plate.interface';

@Component({
  selector: 'g-dashboard-component',
  styleUrls: ['g-dashboard.component.scss'],
  template: `
    <div class="container">
      <div class="buttons">
        <div>
          <h3>Click to Add Weight Plates:</h3>
        </div>
        <button (click)="add(10); calculateTotal()">10 pounds</button>
        <button (click)="add(25); calculateTotal()">25 pounds</button>
        <button (click)="add(35); calculateTotal()">35 pounds</button>
        <button (click)="add(45); calculateTotal()">45 pounds</button>
        <button (click)="remove(); calculateTotal()">Remove</button>
        <button (click)="reset()">Reset</button>
        <h4>Total: {{ this.total }} pounds</h4>
      </div>

      <div class="rack">
        <plate-component
          *ngFor="let plate of leftPlates"
          [weight]="plate.weightInPounds"
        ></plate-component>
        <bar-component></bar-component>
        <plate-component
          *ngFor="let plate of rightPlates"
          [weight]="plate.weightInPounds"
        ></plate-component>
      </div>
    </div>
  `,
})
export class GDashboardComponent {
  leftPlates: Plate[] = [
    {
      weightInPounds: 45,
    },
  ];

  rightPlates: Plate[] = [
    {
      weightInPounds: 45,
    },
  ];

  total: number = 135;

  constructor() {}

  add(pounds: number) {
    this.leftPlates.unshift(Object.create({ weightInPounds: pounds }));
    this.rightPlates.push(Object.create({ weightInPounds: pounds }));
  }

  remove() {
    if (!this.leftPlates || !this.rightPlates) return;
    this.leftPlates.shift();
    this.rightPlates.pop();
  }

  calculateTotal() {
    this.total = 45;

    for (let i = 0; i < this.leftPlates.length; i++) {
      this.total =
        this.total +
        this.leftPlates[i].weightInPounds +
        this.rightPlates[i].weightInPounds;
    }
  }

  reset() {
    this.leftPlates = [];
    this.rightPlates = [];
    this.calculateTotal();
  }
}
