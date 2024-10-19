import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'proyecto_practica';

  monedaOrigen = 0;
  valorFinal = 0;
  valorDolar = 4196.81; // Valor del dolar
  valorPesos = 0.00024;

  opcionSeleccionada = 'ValorPorDefecto';

  mensajeError= '';

  convertirMoneda() {
    switch (this.opcionSeleccionada) {
      case 'USD':
        if (this.monedaOrigen > 0) {
          this.valorFinal = this.monedaOrigen * this.valorDolar;
          this.valorFinal = Number(this.valorFinal.toFixed(3));
    
        } else {
          alert('Ingrese un monto válido.');
        }
        
        break;
      case 'COP':
        if (this.monedaOrigen > 0) {
          // Convertir de dólares a pesos colombianos
          this.valorFinal = this.monedaOrigen * this.valorPesos;
          this.valorFinal = Number(this.valorFinal.toFixed(2));
    
        } else {
          this.mensajeError = 'Ingrese un monto válido.';
        }
    }
    
  }

  
}
