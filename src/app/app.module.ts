import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './services/users.service';
import {WeatherServiceService} from './services/weather-service.service';
import { WeatherAppComponent } from './components/weather-app/weather-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoInputComponent,
    TodoListComponent,
    LimitToPipe,
    HomeComponent,
    WelcomeComponent,
    UsersComponent,
    WeatherAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // importing the module to use HttpCient later to make http calls
    HttpClientModule
  ],
  providers: [
    UsersService,
    WeatherServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
