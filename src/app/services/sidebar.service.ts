import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menuBarraVertical: any[] = [
    {
      titulo: 'Principal.',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Principal', ruta: '/' },
        { titulo: 'ProgressBar', ruta: 'progress' },
        { titulo: 'Grafica', ruta: 'grafica1' },
      ]
    }
  ];
  constructor() { }
}
