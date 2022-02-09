import { Component, Input } from '@angular/core';

interface Data {
  title: string;
  description: string;
  type?: string;
}

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input() title!: string;
  @Input() text: string | undefined;
  @Input() data: Data[] | undefined;
  @Input() break: boolean | undefined = false;
}
