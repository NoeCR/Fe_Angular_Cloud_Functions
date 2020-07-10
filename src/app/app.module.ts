import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';
const COMPONENTS = [  
  AppComponent,
  HomeComponent,
  GotyComponent,
];  
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';  
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  ComponentsModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
