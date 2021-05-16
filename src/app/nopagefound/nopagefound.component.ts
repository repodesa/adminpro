import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefouind',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css'
  ]
})
export class NopagefoundComponent {

  anoActual =  new Date().getFullYear();
}
