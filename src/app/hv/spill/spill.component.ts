import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spill',
  templateUrl: './spill.component.html',
  styleUrls: ['./spill.component.scss'],
})
export class SpillComponent {
  @Input() title!: string;
  @Input() type: string | undefined;
  @Input() description!: string;

  TypeShowing = () => {
    if (this.type === 'email') {
      return `
        <a target="_blank" href="mailto:${this.description}">
          ${this.description}
        </a>
      `;
    } else if (this.type === 'phone') {
      return `<a target="_blank" href="tel:${this.description}"}>
          ${this.description}
        </a>`;
    } else if (this.type === 'url') {
      return `
        <a target="_blank" href="${this.description}"}>
          ${this.description}
        </a>
        `;
    } else {
      return `<span>${this.description}</span>`;
    }
  };
}
