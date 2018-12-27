
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client/list/index.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';

import { ClientService } from './services/client.service';
import { TimeSheetDetailService } from './services/timeSheetDetail.service';



@NgModule({
  declarations: [
    AppComponent, 
    ClientListComponent,
    AddTimeSheetDetailComponent,
    EditTimeSheetDetailComponent,
    TimeSheetDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClientService, 
    TimeSheetDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
