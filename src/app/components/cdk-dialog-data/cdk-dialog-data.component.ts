import {Component, Inject, Input, OnInit} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-cdk-dialog-data',
  templateUrl: './cdk-dialog-data.component.html',
  styleUrls: ['./cdk-dialog-data.component.css']
})
export class CdkDialogDataComponent{
  @Input() childMessage!: string;
  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(CdkDialogDataDialogComponent, {
      minWidth: '300px',
      data: {
        message:this.childMessage
      },
    });
  }


}
@Component({
  selector: 'app-cdk-dialog-data-dialog',
  templateUrl: './cdk-dialog-data-dialog.component.html',
  styleUrls: ['./cdk-dialog-data-dialog.component.css']
})
export class CdkDialogDataDialogComponent{

  constructor(public dialogRef: DialogRef<string>,@Inject(DIALOG_DATA) public data: DialogData) {}


}
