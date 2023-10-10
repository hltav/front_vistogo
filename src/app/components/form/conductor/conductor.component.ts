import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.sass']
})
export class ConductorComponent implements OnInit{

  form!: FormGroup 
  formData : any


  constructor(
    private conductor: ConductorService,
    private formBuilder: FormBuilder, 
    private router: Router,
  ) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      phone: ['', Validators.required],
      cnh: ['', Validators.required],
      address: ['', Validators.required],
      houseNumber: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      
      const formData = {
        name: this.form.value.nome,
        cpf: this.form.value.cpf,
        rg: this.form.value.rg,
        phone: this.form.value.phone,
        cnh: this.form.value.cnh,
        address: this.form.value.address,
        houseNumber: this.form.value.houseNumber,
        district: this.form.value.district,
        state: this.form.value.state,
        city: this.form.value.city,        

      }
      
      this.conductor.createConductor(formData).subscribe(
        () => {
          alert("Seu cadastro foi realizado com sucesso!");
        },
        (error) => {
          if (error.status === 422) {
            console.log('Ocorreu um erro de validação.');
          } else if(error.status ===409){
            alert("CPF já cadastrado")
          } else{
            console.log('Erro desconhecido:', error);
          }
        }
      );
    }
  }

 
}
