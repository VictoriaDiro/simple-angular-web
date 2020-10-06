import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// MATERIAL

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

// COMPONENTES

import { HomeComponent } from './home/home.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { ContactComponent } from './contact/contact.component';

// OBJETOS

import { PopupOneComponent } from '../objectos/popup-one/popup-one.component';
import { PopupTwoComponent } from '../objectos/popup-two/popup-two.component';
import { PopupThreeComponent } from '../objectos/popup-three/popup-three.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'section-one', component: SectionOneComponent },
  { path: 'section-two', component: SectionTwoComponent },
  { path: 'section-three', component: SectionThreeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'popup-one', component: PopupOneComponent },
  { path: 'popup-two', component: PopupTwoComponent},
  { path: 'popup-three', component: PopupThreeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class AppRoutingModule { }
