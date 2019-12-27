import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent} from './hooks/hooks-child.component';
import { ObservableComponent} from './observable/observable.component';
import { UploadFileComponent } from './uploadfile/uploadfile.component';
import { NgZoneComponent } from './ngzone/ngzone.component';
import { FormComponent } from './form/form.component';
import { LazyLoadComponent } from './lazyload/lazyload.component'
import { OrderComponent } from './lazyload/order/order.component'
import { EventGetComponent } from './event/event-get.component'
import { EventNewComponent } from './event/event-new.component'
import { EventEditComponent } from './event/event-edit.component'

import { EventService } from './services/event.service';
import {MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    HooksChildComponent,
    ObservableComponent,
    UploadFileComponent,
    NgZoneComponent,
    FormComponent,
    LazyLoadComponent,
    OrderComponent,
    EventGetComponent,
    EventNewComponent,
    EventEditComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    EventService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }