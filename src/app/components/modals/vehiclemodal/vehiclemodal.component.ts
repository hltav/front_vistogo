import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ViewVehicleComponent } from '../../hiddenButtons/view-vehicle/view-vehicle.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VehicledataService } from 'src/app/services/vehicledata.service';

@Component({
  selector: 'app-vehiclemodal',
  templateUrl: './vehiclemodal.component.html',
  styleUrls: ['./vehiclemodal.component.sass'],
})
export class VehiclemodalComponent {
  vehicles: any[] = [];
  isEditable: boolean = false;
  originalVehicle: any;

  @ViewChild('firstInput') firstInput: ElementRef | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public vehicle: any,
    private dialogRef: MatDialogRef<ViewVehicleComponent>,
    private vehicleservice: VehicledataService
  ) {
    this.originalVehicle = { ...this.vehicle };
  }

  ngOnInit(): void {
    MAT_DIALOG_DATA;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  enableEditing() {
    this.isEditable = true;
    setTimeout(() => {
      if (this.firstInput) {
        this.firstInput.nativeElement.focus();
      }
    }, 0);
  }

  saveChanges() {
    const { km, price, uf } = this.vehicle;
    const updatedVehicle = {
      km: +km,
      price,
      uf,
    };

    this.vehicleservice
      .updateVehicle(this.vehicle.id, updatedVehicle)
      .subscribe(
        (response) => {
          alert('Dados atualizados com sucesso');
          this.isEditable = false;
          this.closeModal();
        },
        (error) => {
          alert('Erro ao atualizar os dados');
          console.error('Ocorreu um erro ao atualizar o condutor:', error);
        }
      );
  }

  cancelChanges() {
    this.vehicle = { ...this.originalVehicle };
    this.isEditable = false;
  }
}
