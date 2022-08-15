import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensionPanelComponent } from './components/expension-panel/expension-panel.component';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatPaginatorComponent} from "./components/mat-paginator/mat-paginator.component";
import {MatSidenavComponent} from "./components/mat-sidenav/mat-sidenav.component";
import {MatTableComponent} from "./components/mat-table/mat-table.component";
import {DragDropComponent} from "./components/drag-drop/drag-drop.component";
import {CdkDialogDataComponent} from "./components/cdk-dialog-data/cdk-dialog-data.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import { CheckboxComponent } from './components/checkbox/checkbox.component';

const routes: Routes = [
  {
    path:"1",component:MatSliderComponent
  },
  {
    path:"2",component:ExpensionPanelComponent
  },
  {
    path:"3",component:MatPaginatorComponent
  },
  {
    path:"4",component:MatSidenavComponent
  },
  {
    path:"5",component:MatTableComponent
  },
  {
    path:"6",component:DragDropComponent
  },
  {
    path:"7",component:CdkDialogDataComponent
  },
  {
    path:"8",component:DialogComponent
  },
  {
    path:"9",component:CheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
