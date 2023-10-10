import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryandmarkService } from 'src/app/services/categoryandmark.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.sass'],
})
export class CreateCategoryComponent {
  formCategory!: FormGroup;
  formMark!: FormGroup;
  formData: any;

  constructor(
    private catandmark: CategoryandmarkService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formCategory = this.formBuilder.group({
      name: [''],
    });
    this.formMark = this.formBuilder.group({
      name: [''],
    });
  }

  submitCategory() {
    if (this.formCategory.valid) {
      const formCategory = {
        name: this.formCategory.value.name
      };

      this.catandmark.createCategory(formCategory).subscribe(
        () => {
          alert('Categoria criada com sucesso!');
        },
        (error) => {
          if (error.status === 422) {
            console.log('Ocorreu um erro de validação.');
          } else if (error.status === 409) {
            alert('Categoria já cadastrada');
          } else {
            console.log('Erro desconhecido:', error);
          }
        }
      );
    }
  }

  submitMark() {
    if (this.formMark.valid) {
      const formMark = {
        name: this.formMark.value.name
      };

      this.catandmark.createMark(formMark).subscribe(
        () => {
          alert('Marca inserida com sucesso!');
        },
        (error) => {
          if (error.status === 422) {
            console.log('Ocorreu um erro de validação.');
          } else if (error.status === 409) {
            alert('Marca já cadastrada');
          } else {
            console.log('Erro desconhecido:', error);
          }
        }
      );
    }
  }
}
