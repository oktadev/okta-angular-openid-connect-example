import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchService, AuthGuard, OktaAuthWrapper } from './shared';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    OAuthModule.forRoot()
  ],
  providers: [
    AuthGuard,
    SearchService,
    OktaAuthWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
