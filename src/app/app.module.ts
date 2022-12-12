import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './components/layouts/adminlayout/adminlayout.component';
import { OuterlayoutComponent } from './components/layouts/outerlayout/outerlayout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/layouts/outerlayout/header/header.component';
import { FooterComponent } from './components/layouts/outerlayout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    OuterlayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
