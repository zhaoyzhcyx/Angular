import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksComponent } from './examples/hooks/hooks.component';
import { HooksChildComponent} from './examples/hooks/hooks-child.component';
import { ObservableComponent} from './examples/observable/observable.component';
import { UploadFileComponent } from './examples/uploadfile/uploadfile.component';
import { NgZoneComponent } from './examples/ngzone/ngzone.component';
import { FormComponent } from './examples/form/form.component';
import { LazyLoadComponent } from './examples/lazyload/lazyload.component'
import { OrderComponent } from './examples/lazyload/order/order.component'
import { EventGetComponent } from './event/event-get.component'
import { EventNewComponent } from './event/event-new.component'
import { EventEditComponent } from './event/event-edit.component'
import { UserSignInComponent } from './user/user-signin.component'
import { UserSignUpComponent } from './user/user-signup.component'
import { UserSetComponent } from './user/user-set.component'

import { EventService } from './services/event.service';
import { UserService } from './services/user.service';
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
    EventEditComponent,
    UserSignInComponent,
    UserSignUpComponent,
    UserSetComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    MessageService,
    EventService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }