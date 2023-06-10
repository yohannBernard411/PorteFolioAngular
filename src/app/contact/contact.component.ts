import { Component } from '@angular/core';
import { faPhone, faSmile, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faPhone = faPhone;
  faSmile = faSmile;
  faMailReply = faMailBulk;
}
