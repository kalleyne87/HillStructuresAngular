import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client/list/index.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListComponent
  },
  {
    path: 'index',
    component: ClientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
