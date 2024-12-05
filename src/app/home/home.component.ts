import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { RouterModule } from '@angular/router';  // Importar RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Importar CommonModule y RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  welcomeMessage: string = 'Bienvenido al sistema de Registro de Clases';
}
