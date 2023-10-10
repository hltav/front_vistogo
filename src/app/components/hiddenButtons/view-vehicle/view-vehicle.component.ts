import { Component } from '@angular/core';
import { VehicledataService } from 'src/app/services/vehicledata.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.sass'],
})
export class ViewVehicleComponent {
  vehicles!: any[]

  constructor(private vehicleservice: VehicledataService) {}

  ngOnInit(): void {
    this.vehicleservice.getVehicles().subscribe((data) => {
      console.log('Data : ', data)
      this.vehicles = data
    });
  }
}
