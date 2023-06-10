import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { EdgingComponent } from './edging/edging.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { MargetitleComponent } from './margetitle/margetitle.component';
import { SelfieComponent } from './selfie/selfie.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BioComponent } from './bio/bio.component';
import { SeeButtonComponent } from './see-button/see-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AchievementsComponent } from './achievements/achievements.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavButtonComponent,
    EdgingComponent,
    AccueilComponent,
    AboutComponent,
    MargetitleComponent,
    SelfieComponent,
    SocialMediaComponent,
    BioComponent,
    SeeButtonComponent,
    AchievementsComponent,
    CardProjectComponent,
    ContactComponent,
    FormulaireContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
