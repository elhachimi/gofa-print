import { provideRouter, RouterConfig }  from '@angular/router';
import { GofaListComponent } from './gofa-list/gofa-list.component';

const routes: RouterConfig = [

  {
    path: 'gofas',
    component: GofaListComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
