import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ProvideSectionsService, ProyectsUI } from 'src/app/services/provide-sections.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges {

  proyects: Array<ProyectsUI> = []
  data:boolean = false
  constructor(private provideSection:ProvideSectionsService){
    this.proyects = this.provideSection.getAlllProyects()
    console.log(this.proyects)
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  activatePoper(event:any){
    console.log(event.target.id)
    this.data = !this.data
  }
}
