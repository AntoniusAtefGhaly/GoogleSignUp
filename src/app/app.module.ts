import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocialAuthService, SocialAuthServiceConfig} from 'angularx-social-login'
import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login'
import { from } from 'rxjs';
import { HomeComponent } from './Components/home/home.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';


const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"login",component:HomeComponent},
  {path:"**", component:HomeComponent}
]


//new SocialAuthServiceConfig
const config=([
  {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider('516568858003-mjaompfmbi8mjdv1kbjct6jgp2h59658.apps.googleusercontent.com')
  }
]);
export function provideconfig(){
  return config;
}
@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory:provideconfig,
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '516568858003-mjaompfmbi8mjdv1kbjct6jgp2h59658.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
