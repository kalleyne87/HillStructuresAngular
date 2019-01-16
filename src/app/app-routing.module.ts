import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job/list/joblist.component';
import { AddJobComponent } from './components/job/add/addjob.component';
import { EditJobComponent } from './components/job/edit/editjob.component';
import { ClientDetailComponent } from './components/client/detail/clientdetail.component';
import { AddClientComponent } from './components/client/add/addclient.component';
import { EditClientComponent } from './components/client/edit/editclient.component';
import { ClientListComponent } from './components/client/list/clientlist.component';
import { AddJobClientComponent } from './components/client/add/addjobclient.component';
import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientlist',
    component: ClientListComponent
  },
  {
    path: 'addclient',
    component: AddClientComponent
  },
  {
    path: 'editclient/:userID',
    component: EditClientComponent
  },
  {
    path: 'clientdetail/:userID',
    component: ClientDetailComponent
  },
  {
    path: 'addjobclient/:userID',
    component: AddJobClientComponent
  },
  {
    path: 'joblist',
    component: JobListComponent
  },
  {
    path: 'addjob',
    component: AddJobComponent
  },
  {
    path: 'editjob/:jobID',
    component: EditJobComponent
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
