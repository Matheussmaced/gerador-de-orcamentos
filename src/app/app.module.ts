import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
