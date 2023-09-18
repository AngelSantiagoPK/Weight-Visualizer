import { Component, Input } from '@angular/core';

@Component({
  selector: 'plate-component',
  template: `
    <div
      class="plate"
      [ngClass]="{
        tens: weight == 10,
        twenty: weight == 25,
        thirty: weight == 35,
        forty: weight == 45
      }"
    ></div>
  `,
  styleUrls: ['./plate.component.scss'],
})
export class PlateComponent {
  @Input()
  weight = 0;
}
