import { Component, Inject } from '@angular/core';
import { ViewVehicleComponent } from '../../hiddenButtons/view-vehicle/view-vehicle.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vehiclemodal',
  templateUrl: './vehiclemodal.component.html',
  styleUrls: ['./vehiclemodal.component.sass']
})
export class VehiclemodalComponent {
  conductors: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public vehicle: any,
    private dialogRef: MatDialogRef<ViewVehicleComponent>
  ) {}

  ngOnInit(): void {

    console.log(this.vehicle)
    MAT_DIALOG_DATA
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
