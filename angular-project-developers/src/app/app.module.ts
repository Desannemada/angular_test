import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AppRoutingModule,
  routingComponents,
} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DevelopersPageComponent } from './pages/developers-page/developers-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { DeveloperService } from '../services/developer-service/developer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DevelopersPageComponent,
    InformationPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DeveloperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
