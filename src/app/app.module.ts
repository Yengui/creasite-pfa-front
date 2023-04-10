import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SeconnecterComponent },
  { path: 'signup', component: SinscrireComponent },
  { path: 'contact', component: ContacterComponent },
  { path: 'create', component: CreerpageComponent },
  { path: 'site/:siteId', component: SiteComponent },
];

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
