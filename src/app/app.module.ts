import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTableModule, MatButtonModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddJobComponent } from './components/job/add/addjob.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { EditJobComponent } from './components/job/edit/editjob.component';
import { JobListComponent } from './components/job/list/joblist.component';
import { AddClientComponent } from './components/client/add/addclient.component';
import { EditClientComponent } from './components/client/edit/editclient.component';
import { ClientListComponent } from './components/client/list/clientlist.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';

import { JobService } from "./services/job.service";
import { ClientService } from './services/client.service';
import { EmployeeService } from './services/employee.service';
import { SupplierService } from './services/supplier.service';
import { TimeSheetService } from './services/timeSheet.service';
import { PaymentSheetService } from './services/paymentSheet.service';
import { SubContractorService } from './services/subcontractor.service';
import { TimeSheetDetailService } from './services/timeSheetDetail.service';
import { PaymentSheetDetailService } from './services/paymentSheetDetail.service';

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    EditJobComponent,    
    JobListComponent,
    HomeComponent,
    AddClientComponent,
    EditClientComponent,
    ClientListComponent,
    AddTimeSheetDetailComponent,
    EditTimeSheetDetailComponent,
    TimeSheetDetailListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    JobService,
    ClientService,
    EmployeeService,
    SupplierService,
    TimeSheetService,
    MatDatepickerModule,
    PaymentSheetService,
    SubContractorService,
    PaymentSheetDetailService,
    TimeSheetDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
