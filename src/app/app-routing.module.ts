import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './examples/uploadfile/uploadfile.component';
import { NgZoneComponent } from './examples/ngzone/ngzone.component';
import { FormComponent } from './examples/form/form.component';
import { HooksComponent } from './examples/hooks/hooks.component';
import { LazyLoadComponent } from './examples/lazyload/lazyload.component';
import { ObservableComponent } from './examples/observable/observable.component';
import { OrderComponent } from './examples/lazyload/order/order.component';
import { EventGetComponent } from './event/event-get.component';
import { EventNewComponent} from './event/event-new.component'
import { EventEditComponent } from './event/event-edit.component'
import { UserSignInComponent } from './user/user-signin.component'
import { UserSignUpComponent } from './user/user-signup.component'
import { UserSetComponent } from './user/user-set.component'

const routes: Routes = [
  {path: 'hooks', component: HooksComponent},
  {path: 'lazyload', component: LazyLoadComponent},
  {path: 'lazyload/order', component: OrderComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'uploadfile', component: UploadFileComponent},
  {path: 'ngzone', component: NgZoneComponent},
  {path: 'form', component: FormComponent},
  {path: 'event', component: EventGetComponent},
  {path: 'event/create', component: EventNewComponent},
  {path: 'event/edit/:id', component: EventEditComponent},
  {path: 'signin', component: UserSignInComponent},
  {path: 'signup', component: UserSignUpComponent},
  {path: 'userset/:username', component: UserSetComponent},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
