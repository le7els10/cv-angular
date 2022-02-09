import { Component } from '@angular/core';
import { faLanguage, faSave } from '@fortawesome/free-solid-svg-icons';
import { globalData, globalDataEn } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cv-angular';
  faLanguage = faLanguage;
  faSave = faSave;

  isSpanish: boolean = true;

  globalData = this.isSpanish ? globalData : globalDataEn;

  print = () => {
    window.print();
  };

  changeLanguage = () => {
    this.isSpanish = !this.isSpanish;
    this.globalData = this.isSpanish ? globalData : globalDataEn;
  };
}
