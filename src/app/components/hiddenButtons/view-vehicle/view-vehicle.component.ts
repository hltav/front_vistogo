import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VehicledataService } from 'src/app/services/vehicledata.service';
import { VehiclemodalComponent } from '../../modals/vehiclemodal/vehiclemodal.component';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.sass'],
})
export class ViewVehicleComponent {
  vehicles!: any[];
  selectedVehicle: any;

  constructor(
    private vehicleservice: VehicledataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vehicleservice.getVehicles().subscribe((data) => {
      this.vehicles = data;
    });
  }

  openEditModal(vehicle: any): void {
    const dialogRef = this.dialog.open(VehiclemodalComponent, {
      data: vehicle,
      width: '900px', 
       
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal fechado', result);
    });
  }

  deleteVehicle(vehicle: any): void {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      this.vehicleservice.deleteVehicle(vehicle.id).subscribe(() => {
        this.vehicles = this.vehicles.filter((c: any) => c.id !== vehicle.id);
        this.selectedVehicle = null;
      });
    }
  }
}
