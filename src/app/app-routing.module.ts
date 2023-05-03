import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { ContacterComponent } from './contacter/contacter.component';
import { CreerpageComponent } from './creerpage/creerpage.component';
import { SiteComponent } from './site/site.component';
import { PreviewComponent } from './preview/preview.component';
import { FormselectorComponent } from './formselector/formselector.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SeconnecterComponent },
  { path: 'signup', component: SinscrireComponent },
  { path: 'contact', component: ContacterComponent },
  { path: 'create', component: CreerpageComponent },
  { path: 'site/:siteId', component: SiteComponent },
  { path: 'preview/:siteId', component: PreviewComponent },
  { path: 'create/:formId', component: FormselectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
