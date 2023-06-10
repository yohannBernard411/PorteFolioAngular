import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-see-button',
  templateUrl: './see-button.component.html',
  styleUrls: ['./see-button.component.css']
})
export class SeeButtonComponent {
  expandBtn: boolean = true;
  @Output() newStateEvent = new EventEmitter<boolean>();
  changeState() {
    this.expandBtn = !this.expandBtn;
    this.newStateEvent.emit(this.expandBtn);
  }
}
