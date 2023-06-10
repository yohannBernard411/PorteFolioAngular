import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {
  @Input() title: string = "";
  @Input() img: string = "";
  @Input() resume: string = "";
  @Input() btn: string = "";
  @Input() lien: string = "";

}
