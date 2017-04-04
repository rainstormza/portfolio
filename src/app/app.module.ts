import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { TypingCarouselComponent } from './shared/typing-carousel/typing-carousel.component';
import { TypingCarouselDirective } from './shared/directive/typing-carousel.directive';
import { MobileTestComponent } from './shared/mobile-test/mobile-test.component';
import { MobileHideDirective } from './shared/directive/mobile-hide.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { PacmanComponent } from './shared/pacman/pacman.component';
import { SupermanLoadingComponent } from './shared/superman-loading/superman-loading.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingCarouselComponent,
    TypingCarouselDirective,
    MobileTestComponent,
    MobileHideDirective,
    NavbarComponent,
    PacmanComponent,
    SupermanLoadingComponent,
    HomeComponent,
    FooterComponent,
    AboutmeComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectComponent,
    TechnologyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
