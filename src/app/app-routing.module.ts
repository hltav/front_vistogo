import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ConductorComponent } from './components/form/conductor/conductor.component';
import { VehicleDataComponent } from './components/form/vehicle-data/vehicle-data.component';
import { CreateCategoryComponent } from './components/form/create-category/create-category.component';
import { ViewVehicleComponent } from './components/hiddenButtons/view-vehicle/view-vehicle.component';
import { ViewConductorComponent } from './components/hiddenButtons/view-conductor/view-conductor.component';
import { ViewCatAndMarkComponent } from './components/hiddenButtons/view-cat-and-mark/view-cat-and-mark.component';
import { RegisterusersComponent } from './components/users/registerusers/registerusers.component';
import { LoginusersComponent } from './components/users/loginusers/loginusers.component';
import { AdminComponent } from './components/principal/admin/admin.component';
import { HomeComponent } from './components/principal/home/home.component';

const routes: Routes = [
  { path: ' ', component: StartComponent },
  { path: 'register', component: RegisterusersComponent },
  { path: 'login', component: LoginusersComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: ' ', component: HomeComponent },
      { path: 'conductor', component: ConductorComponent },
      { path: 'vehicleData', component: VehicleDataComponent },
      { path: 'catAndMark', component: CreateCategoryComponent },
      { path: 'viewVehicle', component: ViewVehicleComponent },
      { path: 'viewConductor', component: ViewConductorComponent },
      { path: 'viewCatAndMark', component: ViewCatAndMarkComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
