
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from "@angular/material/divider";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio'
import { MatDialogModule } from "@angular/material/dialog";
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MetamaskButtonComponent } from './butons/MetamaskButtonComponent ';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MetamaskButtonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
