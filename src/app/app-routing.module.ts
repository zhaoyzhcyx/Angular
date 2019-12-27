import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './uploadfile/uploadfile.component';
import { NgZoneComponent } from './ngzone/ngzone.component';
import { FormComponent } from './form/form.component';
import { HooksComponent } from './hooks/hooks.component';
import { LazyLoadComponent } from './lazyload/lazyload.component';
import { ObservableComponent } from './observable/observable.component';
import { OrderComponent } from './lazyload/order/order.component';
import { EventGetComponent } from './event/event-get.component';
import { EventNewComponent} from './event/event-new.component'
import { EventEditComponent } from './event/event-edit.component'

const routes: Routes = [
  {path: 'hooks', component: HooksComponent},
  {path: 'lazyload', component: LazyLoadComponent},
  {path: 'lazyload/order', component: OrderComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'uploadfile', component: UploadFileComponent},
  {path: 'ngzone', component: NgZoneComponent},
  {path: 'form', component: FormComponent},
  {path: 'events', component: EventGetComponent},
  {path: 'newevent', component: EventNewComponent},
  {path: 'edit/:id', component: EventEditComponent},
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
