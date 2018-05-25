import { TableService } from './table/table.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ROUTES } from './app.routes';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { TablePrimeComponent } from './table-prime/table-prime.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TablePrimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
