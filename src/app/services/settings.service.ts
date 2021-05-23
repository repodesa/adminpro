import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private valorTema: any = document.querySelector('#theme');
  private temaMarcado!: NodeListOf<Element>;

  constructor() {
    const valorTemaActual = localStorage.getItem('tema') || `./assets/css/colors/default.css`;    
    this.valorTema.setAttribute('href', valorTemaActual);
  }

  configurarTemaSesion(tema: String) {
    const valorTemaActual = `./assets/css/colors/${tema}.css`;
    this.valorTema.setAttribute('href', valorTemaActual);
    localStorage.setItem('tema', valorTemaActual);
    this.marcarTemaSeleccionado();
  }

  marcarTemaSeleccionado(): void {
    this.temaMarcado = document.querySelectorAll('.selector');

    this.temaMarcado.forEach(element => {
      element.classList.remove('working');

      const temaActual = element.getAttribute('data-theme');
      const temaActualUrl = `./assets/css/colors/${temaActual}.css`;

      if (this.valorTema.getAttribute('href') === temaActualUrl) {
        element.classList.add('working');
      }
    });
  }
}
