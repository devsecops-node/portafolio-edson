import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ProyectsUI } from 'src/app/services/provide-sections.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() proeyctToActivate!:ProyectsUI
  @Output() desacPopUP = new EventEmitter<boolean>()


  desactivatePopup(){
    this.desacPopUP.emit(false)
  }

}
