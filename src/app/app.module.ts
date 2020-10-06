import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// APP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTES

import { HeaderComponent } from './header/header.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { HomeComponent } from './home/home.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { ContactComponent } from './contact/contact.component';

// OBJETOS

import { PopupOneComponent } from '../objectos/popup-one/popup-one.component';
import { PopupTwoComponent } from '../objectos/popup-two/popup-two.component';
import { PopupThreeComponent } from '../objectos/popup-three/popup-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResponsiveMenuComponent,
    HomeComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    ContactComponent,
    PopupOneComponent,
    PopupTwoComponent,
    PopupThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
