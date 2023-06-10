import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
    open= false;
    windowWidth= false;
    position= 0;
    screen= "pc";
    expend = false;

    ngOnInit() {  
      this.windowWidth = window.innerWidth<1000;
      this.expend = this.open && this.windowWidth;
    }

    @HostListener('window:resize', ['$event'])  
      onResize() {  
        this.windowWidth = window.innerWidth<1000;
        this.expend = this.open && this.windowWidth;
      }
    handleClick(){
      this.open = !this.open;
      this.expend = this.open && this.windowWidth;
    }

    @HostListener('window:scroll', ['$event'])
      onScroll() {
        this.position= window.scrollY
      }

}


/*
this.state = {
  open: false,
  position: 0,
  screen: "smart"
};
}

handleClick = () => {
this.setState({open: !this.state.open});
}

handleScroll = () => {
this.setState({position: window.scrollY});
}

componentDidMount() {
window.addEventListener('scroll', this.handleScroll);
(window.innerWidth<1000) ? this.setState({screen: "smart"}) : this.setState({screen: "pc"});
}
*/