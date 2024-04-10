import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './client/form/form.component';
import { ListComponent } from './client/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './client/update/update.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from './shared/searchfilterpipe/searchfilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    UpdateComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchfilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
