import { Component } from '@angular/core';

@Component({
  selector: 'app-info-main',
  templateUrl: './info-main.component.html',
  styleUrls: ['./info-main.component.css']
})
export class InfoMainComponent {
  sectionTo: string = ''

  redirection(event: any) {
    console.log(event.target.href)
    const href = event.target.href as string
    if (href) {
      const section = href.split('#')[1]
      this.sectionTo = section
    }
    else {
      console.log('Something wrong')
    }
  }
}
