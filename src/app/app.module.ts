// app’s root module. It imports other modules and declares AppComponent

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { NetworkComponent } from './network/network.component';
import { NotificationComponent } from './notification/notification.component';
import { MeComponent } from './me/me.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ActionComponent, NetworkComponent, NotificationComponent, MeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


