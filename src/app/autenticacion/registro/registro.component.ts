import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  onRegister() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        console.log('Usuario registrado:', userCredential.user);
        this.router.navigate(['/home']);  // Redirigir al home o dashboard
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  }
}
