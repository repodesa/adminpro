import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFuntions() : any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public tittle: String = "2021";

  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
    customInitFuntions();
  }
}
