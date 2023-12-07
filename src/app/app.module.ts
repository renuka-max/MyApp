import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';
import { MMyPipe } from './m-my.pipe';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { CurdFormComponent } from './curd-form/curd-form.component';
import { CurdServises } from './curd-form/Curd.servises';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HoverDirective } from './my.directive';


@NgModule({
  declarations: [
    AppComponent,
    MMyPipe,
    MainComponent,
    CurdFormComponent,
    HomeComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [APIService,CurdServises],
  bootstrap: [AppComponent]
})
export class AppModule { }
