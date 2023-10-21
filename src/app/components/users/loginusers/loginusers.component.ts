import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loginusers',
  templateUrl: './loginusers.component.html',
  styleUrls: ['./loginusers.component.sass'],
})
export class LoginusersComponent {
  email!: string;
  password!: string;
  constructor(private router: Router, private userservice: UserService) {}

  loginUser() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    // this.userservice.findUserByEmail(credentials).subscribe(
    //   () => {
    //     localStorage.setItem('email', this.email);
    //     localStorage.setItem('password', this.password);
    //     alert('Login realizado com sucesso!');
    //     setTimeout(() => {
    //       this.router.navigate(['/home/inicial']);
    //     }, 2000);
    //   },
    //   (error) => {
    //     if (error.status === 401) {
    //       alert('Usuário ou senha inválidos!');
    //       console.log(error);
    //     } else {
    //       alert(
    //         'Erro ao autenticar usuário: Por favor, aguarde uns instantes!'
    //       );
    //     }
    //   }
    // );
    this.userservice.findUserByEmail(credentials.email).subscribe(
      (user) => {
        if (user && user.password === credentials.password) {
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          alert('Login realizado com sucesso!');
          setTimeout(() => {
            this.router.navigate(['/home/inicial']);
          }, 2000);
        } else {
          alert('Usuário ou senha inválidos!');
        }
      },
      (error) => {
        if (error.status === 401) {
          alert('Usuário ou senha inválidos!');
          console.log(error);
        } else {
          alert('Erro ao autenticar usuário: Por favor, aguarde uns instantes!');
        }
      }
    );
  }
}
