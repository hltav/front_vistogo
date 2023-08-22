import { Component, OnInit } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.sass']
})
export class ConductorComponent implements OnInit {

  form : any 


  constructor(private conductorService: ConductorService) { }

  ngOnInit(): void {
    this.getConductors();
  }

  getConductors(): void {
    this.conductorService.getConductors().subscribe(
      (data) => {
        console.log(data); // Faça o que quiser com os dados recebidos
      },
      (error) => {
        console.error('Erro ao obter condutores:', error);
      }
    );
  }

  createConductor(): void {
    const newConductor = {
      // Preencha com os dados do novo condutor
    };

    this.conductorService.createConductor(newConductor).subscribe(
      (response) => {
        console.log('Conductor criado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao criar condutor:', error);
      }
    );
  }

  submitForm(formData: any): void {
    // Chame o método do serviço para criar o condutor
    this.conductorService.createConductor(formData).subscribe(
      (response) => {
        console.log('Conductor criado com sucesso:', response);
        // Faça algo após o sucesso, como exibir uma mensagem ao usuário
      },
      (error) => {
        console.error('Erro ao criar condutor:', error);
        // Lide com o erro, como exibir uma mensagem de erro ao usuário
      }
    );
  }

}
