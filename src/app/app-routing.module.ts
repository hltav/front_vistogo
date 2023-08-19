import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ConductorComponent } from './components/form/conductor/conductor.component';
import { VehicleDataComponent } from './components/form/vehicle-data/vehicle-data.component';

const routes: Routes = [
  {path:" ", component: StartComponent},
  {path:"conductor", component: ConductorComponent},
  {path:"vehicleData", component: VehicleDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
