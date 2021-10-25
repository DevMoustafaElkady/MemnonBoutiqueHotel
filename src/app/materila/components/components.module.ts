import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Angular Material Components */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';



const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatMenuModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents,
  ],
  exports: [
    materialComponents,
  ]
})
export class ComponentsModule { }
