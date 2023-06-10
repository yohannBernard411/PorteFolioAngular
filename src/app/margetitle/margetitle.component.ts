import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-margetitle',
  templateUrl: './margetitle.component.html',
  styleUrls: ['./margetitle.component.css']
})
export class MargetitleComponent {
  @Input() title: string = "";
  @Input() rank: number = 0;
  position: number = 0;
  adaptStyle: string = "";
  shift: number = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.shift = this.title.length/8;
    this.position= window.scrollY
    if(this.position<((this.rank)*window.innerHeight)){
      this.adaptStyle = "haut";
    }else if(this.position < (((this.rank+0.5)*window.innerHeight)-(this.shift*60)) && ((this.rank)*window.innerHeight) <= this.position){
      this.adaptStyle = "milieu";
    }else if(this.position >= (((this.rank+0.5)*window.innerHeight)-(this.shift*60))){
      this.adaptStyle = "bas";
    }
  }
}
