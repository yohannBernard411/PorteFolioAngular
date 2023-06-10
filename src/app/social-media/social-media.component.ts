import { Component } from '@angular/core';
import { faFacebook, faCodepen, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  faFacebook = faFacebook;
  faCodepen = faCodepen;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

}
