import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  selectedRows: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteComponent>
  ) {
  
    this.selectedRows = data.selectedRows;
    console.log(this.selectedRows);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
