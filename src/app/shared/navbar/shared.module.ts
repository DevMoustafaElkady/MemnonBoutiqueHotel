import { SidemenueComponent } from './../sidemenue/sidemenue.component';
import { FooterComponent } from './../footer/footer.component';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/materila/components/components.module';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const translateModule: any = TranslateModule.forRoot({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  }
});


@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidemenueComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    translateModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidemenueComponent,
    translateModule
  ]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader{
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
} 

