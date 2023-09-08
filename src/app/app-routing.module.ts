import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNumberItemsComponent } from './components/form-number-items/form-number-items.component';
import { FormNameItemsComponent } from './components/form-name-items/form-name-items.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form-items',
    component: FormNumberItemsComponent,
  },
  {
    path: 'form-name/:number',
    component: FormNameItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
