import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() position: number = 0;
  expandButton: boolean=true;
  changeState(newState: boolean) {
    this.expandButton = newState;
  }
}
