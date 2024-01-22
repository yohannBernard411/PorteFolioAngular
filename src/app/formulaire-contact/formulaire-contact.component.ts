import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target as HTMLFormElement, 'cK6npJiBYFOhFlyFM')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }); 
  }
}
