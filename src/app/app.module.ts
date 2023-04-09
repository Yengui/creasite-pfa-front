import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SeconnecterComponent },
  { path: 'signup', component: SinscrireComponent },
  { path: 'contact', component: ContacterComponent },
  { path: 'create', component: CreerpageComponent },
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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
