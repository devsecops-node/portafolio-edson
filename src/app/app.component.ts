import { Component, ComponentFactoryResolver, ElementRef, Input } from '@angular/core';
import { ProyectsUI } from './services/provide-sections.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio1';
  proyectToPopUp!: ProyectsUI | null
  activate:boolean = true

  activatePopup(data2: ProyectsUI) {
    this.proyectToPopUp = data2
    this.activate = true
  }

  desactivatePopUp(event: boolean) {
    this.proyectToPopUp = null
    this.activate = false
  }
}
