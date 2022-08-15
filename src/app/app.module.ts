import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import {MatSliderModule} from "@angular/material/slider";
import { ExpensionPanelComponent } from './components/expension-panel/expension-panel.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import { MatPaginatorComponent } from './components/mat-paginator/mat-paginator.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSidenavComponent } from './components/mat-sidenav/mat-sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {
  CdkDialogDataComponent,
  CdkDialogDataDialogComponent
} from './components/cdk-dialog-data/cdk-dialog-data.component';
import {DialogModule} from "@angular/cdk/dialog";
import { DialogComponent } from './components/dialog/dialog.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MatSliderComponent,
    ExpensionPanelComponent,
    MatPaginatorComponent,
    MatSidenavComponent,
    MatTableComponent,
    DragDropComponent,
    CdkDialogDataComponent,
    CdkDialogDataDialogComponent,
    DialogComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    DragDropModule,
    DialogModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
