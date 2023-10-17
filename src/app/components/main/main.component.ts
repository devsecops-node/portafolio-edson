import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, Output,EventEmitter } from '@angular/core';
import { ProvideSectionsService, ProyectsUI } from 'src/app/services/provide-sections.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges {

  @Output() activatePopUp = new EventEmitter<ProyectsUI>()


  proyects: Array<ProyectsUI> = []
  constructor(private provideSection:ProvideSectionsService){
    this.proyects = this.provideSection.getAlllProyects()
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  activatePoper(proyect:ProyectsUI){
    this.activatePopUp.emit(proyect)
  }
}
