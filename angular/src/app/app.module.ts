import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoService } from './services/todo.service';
import { FormComponent } from './form/form.component';
import { routerModule } from './app.router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    FormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    routerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  providers: [TodoService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
