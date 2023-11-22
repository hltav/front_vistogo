import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loginusers',
  templateUrl: './loginusers.component.html',
  styleUrls: ['./loginusers.component.sass'],
})
export class LoginusersComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    if (this.email && this.password) {
      this.userService.getUsers().subscribe(
        (users: any) => {
          const foundUser = users.find((user: any) => user.email === this.email && user.password === this.password);
          if (foundUser) {
            console.log('Login successful');
            // Coloque aqui a lógica para redirecionar o usuário para a página de destino após o login bem-sucedido.
          } else {
            console.log('Login failed. Invalid credentials');
            // Coloque aqui a lógica para exibir uma mensagem de erro ou tomar outras ações apropriadas quando o login falhar.
          }
        },
        (error) => {
          console.error('Error fetching users', error);
          // Coloque aqui a lógica para lidar com erros durante a busca de usuários.
        }
      );
    } else {
      console.log('Por favor, preencha o email e a senha.');
      // Coloque aqui a lógica para lidar com o caso em que o usuário não preencheu o email e/ou a senha.
    }
  }
    // const credentials = {
    //   email: this.email,
    //   password: this.password,
    // };

    // console.log(credentials)

    // this.userService.getUsers(credentials.email).subscribe(
    //   (user) => {
    //     if (user && user.password === credentials.password) {
    //       localStorage.setItem('email', this.email);
    //       localStorage.setItem('password', this.password);
    //       alert('Login realizado com sucesso!');
    //       setTimeout(() => {
    //         this.router.navigate(['/home']);
    //       }, 2000);
    //     } else {
    //       alert('Usuário ou senha inválidos!');
    //     }
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
  }

  // loginUser() {
  //   const credentials = {
  //     email: this.email,
  //     password: this.password,
  //   };

  //   this.userService.findAllUsers().subscribe(
  //     (users) => {
  //       const user = users.find((user) => user.email === credentials.email);
  //       if (user && user.password === credentials.password) {
  //         localStorage.setItem('email', this.email);
  //         localStorage.setItem('password', this.password);
  //         alert('Login realizado com sucesso!');
  //         setTimeout(() => {
  //           this.router.navigate(['/home']);
  //         }, 2000);
  //       } else {
  //         alert('Usuário ou senha inválidos!');
  //       }
  //     },
  //     (error) => {
  //       if (error.status === 401) {
  //         alert('Usuário ou senha inválidos!');
  //         console.log(error);
  //       } else {
  //         alert(
  //           'Erro ao autenticar usuário: Por favor, aguarde uns instantes!'
  //         );
  //       }
  //     }
  //   );
  // }
  // email: string = '';
  // password: string = '';

  // constructor(private router: Router, private userservice: UserService) {}

  // loginUser() {
  //   const credentials = {
  //     email: this.email,
  //     password: this.password,
  //   };

  //   this.userservice.findUserByEmail(credentials.email).subscribe(
  //     (user) => {
  //       if (user && user.password === credentials.password) {
  //         localStorage.setItem('email', this.email);
  //         localStorage.setItem('password', this.password);
  //         alert('Login realizado com sucesso!');
  //         setTimeout(() => {
  //           this.router.navigate(['/home']);
  //         }, 2000);
  //       } else {
  //         alert('Usuário ou senha inválidos!');
  //       }
  //     },
  //     (error) => {
  //       if (error.status === 401) {
  //         alert('Usuário ou senha inválidos!');
  //         console.log(error);
  //       } else {
  //         alert(
  //           'Erro ao autenticar usuário: Por favor, aguarde uns instantes!'
  //         );
  //       }
  //     }
  //   );
  // }

