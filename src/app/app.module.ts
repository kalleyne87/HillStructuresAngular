
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/nav-bar/navbar.component';
import { ClientListComponent } from './components/client/list/index.component';
import { TimeSheetDetailListComponent } from './components/timesheetdetail/list/index.component';
import { AddTimeSheetDetailComponent } from './components/timesheetdetail/add/add.component';
import { EditTimeSheetDetailComponent } from './components/timesheetdetail/edit/edit.component';
import { HomeComponent } from './components/home/index.component';

import { ClientService } from './services/client.service';
import { TimeSheetDetailService } from './services/timeSheetDetail.service';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent,
    ClientListComponent,
    AddTimeSheetDetailComponent,
    EditTimeSheetDetailComponent,
    TimeSheetDetailListComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ClientService, 
    TimeSheetDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
