import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registerusers',
  templateUrl: './registerusers.component.html',
  styleUrls: ['./registerusers.component.sass']
})
export class RegisterusersComponent {
  registerForm!: FormGroup
  isEmailRegistered = false

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
    })
  }

  registerUser() {
    if (this.registerForm.valid) {
      const termsAccepted = this.registerForm.value.termsAccepted

      if (!termsAccepted) {
        alert('É necessário aceitar os termos de uso e política de privacidade.')
        return
      }
      const user = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      }

      this.userservice.createUser(user).subscribe(
        () => {
          alert('Cadastro efetuado com sucesso!')

          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 3000)
        },
        (error) => {
             console.log(error)

          if (error.error === 'Email já cadastrado') {
            alert('Email já cadastrado!')
          } else {
            alert('Erro desconhecido')
          }
        },
      )
    } else {
      alert('É necessário aceitar os termos de uso e política de privacidade.')
    }
  }

}
