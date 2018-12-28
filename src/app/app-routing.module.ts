import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job/list/index.component';
import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './components/client/list/index.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'index',
    component: HomeComponent
  },
  {
    path: 'job/index',
    component: JobListComponent
  },
  {
    path: 'timesheetdetail/index',
    component: TimeSheetDetailListComponent
  },
  {
    path: 'timesheetdetail/add',
    component: AddTimeSheetDetailComponent
  },
  {
    path: 'timesheetdetail/edit/:timeSheetDetailID',
    component: EditTimeSheetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
