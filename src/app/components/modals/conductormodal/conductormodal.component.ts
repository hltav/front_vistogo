import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewConductorComponent } from '../../hiddenButtons/view-conductor/view-conductor.component';

@Component({
  selector: 'app-conductormodal',
  templateUrl: './conductormodal.component.html',
  styleUrls: ['./conductormodal.component.sass'],
})
export class ConductormodalComponent {
  
  conductors: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public conductor: any,
    private dialogRef: MatDialogRef<ViewConductorComponent>
  ) {}

  ngOnInit(): void {
    MAT_DIALOG_DATA
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
