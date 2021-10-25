import { NotFoundComponent } from './views/not-found/not-found.component';
import { SingePostComponent } from './views/singe-post/singe-post.component';
import { RestaurantComponent } from './views/restaurant/restaurant.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './views/trips/trips.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  {
    path: 'trips',
    component: TripsComponent
  },
  {
    path: 'blog/:id',
    component: SingePostComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
