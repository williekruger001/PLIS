import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  { path: 'event-details/:id', component: EventDetailsComponent },
  { path: 'events', component: EventsComponent },
  { path: '',  redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    InfiniteScrollModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
