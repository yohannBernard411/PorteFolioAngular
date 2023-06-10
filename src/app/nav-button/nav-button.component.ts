import {Component, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {

  classList = "btn";
  positionVisee: number = 0;

  @Input() buttonName: string = "";
  @Input() buttonPosition: any = 0;
  @Input() buttonRange: any = [0, 0];
  @Input() buttonRank: any = 1;

  ngOnInit() {
    if(this.buttonName==="Welcome"){
      this.classList = "btn active";
    }
  }

  handleClick(){
    this.positionVisee = (this.buttonRange[0]*window.innerHeight - (window.innerHeight/10));
    window.scrollTo({
      top: (this.buttonRange[0]*window.innerHeight - (window.innerHeight/10)),
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
      if (this.buttonPosition >= (this.buttonRange[0])*window.innerHeight-window.innerHeight/2 && this.buttonPosition < this.buttonRange[1]*window.innerHeight-window.innerHeight/2){
        this.classList = 'btn active';
      }else{
        this.classList = 'btn';
      }
    }
}
