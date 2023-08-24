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
      direcction: ['', Validators.required],
       
    });
  }

  submitForm() {
    if (this.form.valid) {
      
      const formData = {
        name: this.form.value.nome,
        cpf: this.form.value.cpf,
        rg: this.form.value.rg,
        fone: this.form.value.fone,
        cnh: this.form.value.cnh,
        endereco: this.form.value.endereco,
        

      }
      
      this.conductor.createConductor(formData).subscribe(
        () => {
          alert("Seu cadastro foi realizado com sucesso!");
        },
        (error) => {
          if (error.status === 422) {
            console.log('Ocorreu um erro de validação.');
          } else {
            console.log('Erro desconhecido:', error);
          }
        }
      );
    }
  }

  // submitForm() {
   
  //   if (this.form.valid) {
  //     const formData = new FormData();

  //     formData.append('nome', this.form.get('nome')!.value);
  //     formData.append('CPF', this.form.get('CPF')!.value);
  //     formData.append('RG', this.form.get('RG')!.value);
  //     formData.append('phone', this.form.get('phone')!.value);
  //     formData.append('CNH', this.form.get('CNH')!.value);
  //     formData.append('direcction', this.form.get('direcction')!.value);
  //     formData.append('selfie', this.form.get('selfie')!.value);

     
  //     this.conductor.createConductor(formData).subscribe(() => {
  //       alert("Seu cadastro foi realizado com sucesso!");
  //     }, (error)=> {
  //       console.log(`error`, error);
  //     })
      
      
  //   }
  // }
 
  
}
