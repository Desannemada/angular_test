import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersPageComponent } from '../pages/developers-page/developers-page.component';
import { InformationPageComponent } from '../pages/information-page/information-page.component';

const routes: Routes = [
  { path: 'developers', component: DevelopersPageComponent },
  { path: 'information', component: InformationPageComponent },
  { path: '', redirectTo: 'developers', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DevelopersPageComponent,
  InformationPageComponent,
];
