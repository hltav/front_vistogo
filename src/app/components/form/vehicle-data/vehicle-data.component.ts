import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VehicledataService } from './../../../services/vehicledata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryandmarkService } from 'src/app/services/categoryandmark.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.sass'],
})
export class VehicleDataComponent implements OnInit {
  form!: FormGroup;
  formData: any;
  categories: any[] = [];
  marks: any[] = [];
  priceValue: number = 10000;

  constructor(
    private vehicle: VehicledataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private catandmark: CategoryandmarkService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadMarks();

    this.form = this.formBuilder.group({
      plate: ['', Validators.required],
      chassis: ['', Validators.required],
      renavam: ['', Validators.required],
      km: ['', Validators.required],
      model: ['', Validators.required],
      markId: ['', Validators.required],
      uf: ['', Validators.required],
      year: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  loadCategories() {
    this.catandmark.getCategory().subscribe((data: any) => {
      this.categories = data;
    });
  }

  loadMarks() {
    this.catandmark.getMark().subscribe((data: any) => {
      this.marks = data;
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = {
        plate: this.form.value.plate,
        chassis: this.form.value.chassis,
        renavam: this.form.value.renavam,
        km: +this.form.value.km,
        model: this.form.value.model,
        markId: +this.form.value.markId,
        uf: this.form.value.uf,
        year: +this.form.value.year,
        categoryId: +this.form.value.categoryId,
        price: this.form.value.price,
      };

      this.vehicle.createVehicles(formData).subscribe(
        () => {
          alert('Veículo registrado com Sucesso.');
        },
        (error) => {
          if (error.status === 422) {
            console.log('Ocorreu um erro de validação.');
          } else if (error.status === 409) {
            alert('Chassi já registrado');
          } else if (error.status === 400) {
            console.log('Erro de solicitação', error);
          } else {
            console.log('Erro desconhecido:', error);
          }
        }
      );
    }
  }
}
