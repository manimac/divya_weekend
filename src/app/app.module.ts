import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { AboutChildComponent } from './about-child/about-child.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { FormsComponent } from './forms/forms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommonComponent } from './common/common.component';
import { ConvertToDollarPipe, ToUpperPipe } from './pipes/convert-to-dollar.pipe';
import { InputFilterPipe } from './pipes/input-filter.pipe';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './directives/custom.directive';
import { CrudComponent } from './crud/crud.component';
import { SettingsComponent } from './accountModule/settings/settings.component';
import { AccountModuleModule } from './account-module/account-module.module';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    AboutComponent,
    AboutChildComponent,
    HeaderComponent,
    EventsComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    CommonComponent,
    ConvertToDollarPipe,
    ToUpperPipe,
    InputFilterPipe,
    ApiComponent,
    CustomDirective,
    CrudComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountModuleModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent],
  exports: [AboutComponent]
})
export class AppModule { }
