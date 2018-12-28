import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';
import { HomeComponent } from './components/home/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client/list/index.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home/index',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddTimeSheetDetailComponent
  },
  {
    path: 'edit/:timeSheetDetailID',
    component: EditTimeSheetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
