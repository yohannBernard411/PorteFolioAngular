import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portefolio-Angular';
  position: number = 0;
  @HostListener('window:scroll', ['$event'])
      onScroll() {
        this.position= window.scrollY
      }
}
