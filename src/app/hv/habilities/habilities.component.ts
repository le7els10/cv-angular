import { Component, Input } from '@angular/core';
import { globalData } from '../../../environments/environment';
interface Habilities {
  title: string;
  value: number;
}
@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.scss'],
})
export class HabilitiesComponent {
  @Input() title!: string;
  habilities: Habilities[] = globalData.habilitiesData;
}
