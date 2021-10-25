import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memnon';
currentLang = '';
  constructor(public translate: TranslateService){}

  changeCurrentLang(lang: string): void{
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
