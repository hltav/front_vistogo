import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ConductorComponent } from './components/form/conductor/conductor.component';
import { VehicleDataComponent } from './components/form/vehicle-data/vehicle-data.component';
import { CreateCategoryComponent } from './components/form/create-category/create-category.component';
import { ViewVehicleComponent } from './components/hiddenButtons/view-vehicle/view-vehicle.component';
import { ViewConductorComponent } from './components/hiddenButtons/view-conductor/view-conductor.component';
import { ViewCatAndMarkComponent } from './components/hiddenButtons/view-cat-and-mark/view-cat-and-mark.component';



const routes: Routes = [
  {path:" ", component: StartComponent},
  {path:"conductor", component: ConductorComponent},
  {path:"vehicleData", component: VehicleDataComponent},
  {path:"catAndMark", component: CreateCategoryComponent},
  {path:"viewVehicle", component: ViewVehicleComponent},
  {path:"viewConductor", component: ViewConductorComponent},
  {path:"viewCatAndMark", component: ViewCatAndMarkComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
