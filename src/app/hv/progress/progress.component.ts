import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  @Input() title!: string;
  @Input() value!: number;

  buildStyle = (value: number) => {
    return `width:${value}%;`;
  };
}
