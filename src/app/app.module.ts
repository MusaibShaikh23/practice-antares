import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import {McBreadcrumbsConfig, McBreadcrumbsModule, McBreadcrumbsService} from 'ngx-breadcrumbs';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    McBreadcrumbsModule
  ],
  providers: [McBreadcrumbsService , McBreadcrumbsConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }


