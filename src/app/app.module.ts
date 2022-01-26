import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatChipsModule, MatTableModule, MatButtonModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddJobComponent } from './components/job/add/addjob.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { EditJobComponent } from './components/job/edit/editjob.component';
import { JobListComponent } from './components/job/list/joblist.component';
import { JobDetailComponent } from './components/job/detail/jobdetail.component';
import { AddClientComponent } from './components/client/add/addclient.component';
import { EditClientComponent } from './components/client/edit/editclient.component';
import { ClientListComponent } from './components/client/list/clientlist.component';
import { AddJobClientComponent } from './components/client/add/addjobclient.component';
import { ClientDetailComponent } from './components/client/detail/clientdetail.component';
import { JobDetailDialogComponent } from './components/job/detail/jobdetaildialog.component';
import { ClientDetailDialogComponent } from './components/client/detail/clientdetaildialog.component';
import { EmployeeDetailComponent } from './components/employee/detail/employeedetail.component';
import { EmployeeListComponent } from './components/employee/list/employeelist.component';
import { EditEmployeeComponent } from './components/employee/edit/editemployee.component';
import { AddEmployeeComponent } from './components/employee/add/addemployee.component';
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
    JobDetailComponent,
    HomeComponent,
    AddClientComponent,
    EditClientComponent,
    ClientListComponent,
    ClientDetailComponent,
    AddJobClientComponent,
    ClientDetailDialogComponent,
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
    MatChipsModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatListModule,
    MatDialogModule
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
  entryComponents: [
    ClientDetailDialogComponent,
    JobDetailDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
