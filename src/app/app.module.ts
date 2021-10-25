import { ComponentsModule } from './materila/components/components.module';
import { SharedModule } from './shared/navbar/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RestaurantComponent } from './views/restaurant/restaurant.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TripsComponent } from './views/trips/trips.component';
import { SingePostComponent } from './views/singe-post/singe-post.component';
import { NotFoundComponent } from './views/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoomsComponent,
    RestaurantComponent,
    TripsComponent,
    SingePostComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    SharedModule,
    ComponentsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
