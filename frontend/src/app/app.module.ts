import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    RegisterPageComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
