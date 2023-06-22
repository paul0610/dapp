import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';

const MaterialComponents = [
   CommonModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatBadgeModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatCardModule,
   MatCheckboxModule,
   MatProgressSpinnerModule,
   MatSortModule,
   MatExpansionModule,
   MatMenuModule,
   MatBottomSheetModule,
   MatDialogModule,
   MatSlideToggleModule,
   MatAutocompleteModule,
   MatSelectFilterModule,
   MatDividerModule,
   MatSnackBarModule,
   MatButtonToggleModule,
   MatTabsModule,
   MatDialogModule
]

@NgModule({
   imports: [
      MaterialComponents,
      
   ],
   exports: [
      MaterialComponents,
   ],
   providers: [
      MatDatepickerModule,
      {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
   ]
})

export class AngularMaterialModule { }
