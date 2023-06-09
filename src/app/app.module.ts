import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { ServicesectionComponent } from './servicesection/servicesection.component';
import { StepsectionComponent } from './stepsection/stepsection.component';
import { StepscardComponent } from './stepscard/stepscard.component';
import { TarifsectionComponent } from './tarifsection/tarifsection.component';
import { TarifcardComponent } from './tarifcard/tarifcard.component';
import { FooterComponent } from './footer/footer.component';
import { CreerpageComponent } from './creerpage/creerpage.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { ContacterComponent } from './contacter/contacter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { SiteComponent } from './site/site.component';
import { PreviewComponent } from './preview/preview.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { FormselectorComponent } from './formselector/formselector.component';
import { ProfileComponent } from './profile/profile.component';
import { Template1dynamicComponent } from './template1dynamic/template1dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosectionComponent,
    ServicesectionComponent,
    StepsectionComponent,
    StepscardComponent,
    TarifsectionComponent,
    TarifcardComponent,
    FooterComponent,
    CreerpageComponent,
    SeconnecterComponent,
    SinscrireComponent,
    ContacterComponent,
    NavbarComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    SiteComponent,
    PreviewComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    FormselectorComponent,
    ProfileComponent,
    Template1dynamicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
