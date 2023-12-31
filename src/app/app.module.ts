import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConductorComponent } from './components/form/conductor/conductor.component';
import { VehicleDataComponent } from './components/form/vehicle-data/vehicle-data.component';
import { VehiclePhotoComponent } from './components/form/vehicle-photo/vehicle-photo.component';
import { StartComponent } from './components/start/start.component';
import { CreateCategoryComponent } from './components/form/create-category/create-category.component';
import { ViewConductorComponent } from './components/hiddenButtons/view-conductor/view-conductor.component';
import { ViewVehicleComponent } from './components/hiddenButtons/view-vehicle/view-vehicle.component';
import { ViewCatAndMarkComponent } from './components/hiddenButtons/view-cat-and-mark/view-cat-and-mark.component';
import ptBr from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ConductormodalComponent } from './components/modals/conductormodal/conductormodal.component';
import { VehiclemodalComponent } from './components/modals/vehiclemodal/vehiclemodal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterusersComponent } from './components/users/registerusers/registerusers.component';
import { LoginusersComponent } from './components/users/loginusers/loginusers.component';
import { AdminComponent } from './components/principal/admin/admin.component';
import { HomeComponent } from './components/principal/home/home.component';
import { RouterModule } from '@angular/router';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConductorComponent,
    VehicleDataComponent,
    VehiclePhotoComponent,
    StartComponent,
    CreateCategoryComponent,
    ViewConductorComponent,
    ViewVehicleComponent,
    ViewCatAndMarkComponent,
    ConductormodalComponent,
    VehiclemodalComponent,
    RegisterusersComponent,
    LoginusersComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
