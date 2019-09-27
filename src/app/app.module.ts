import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent} from './hooks/hooks-child.component';
import { ObservableComponent} from './observable/observable.component';
import { UploadFileComponent } from './uploadfile/uploadfile.component';
import { NgZoneComponent } from './ngzone/ngzone.component';
import { FormComponent } from './form/form.component';

import {MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksChildComponent,
    ObservableComponent,
    UploadFileComponent,
    NgZoneComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
