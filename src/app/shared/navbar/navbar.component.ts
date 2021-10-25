import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang = '';
  constructor( public translate: TranslateService) {
  this.currentLang = localStorage.getItem('currentLang') || 'en';
  this.translate.use(this.currentLang);
   }

  changeCurrentLang(lang: string): void{
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  ngOnInit(): void {
  }

}






