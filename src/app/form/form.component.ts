import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';


@Component ({
    selector: 'app-form',
    templateUrl: './form.component.html',
})

export class FormComponent {
    name=new FormControl(0);
    dataB=0;
    div1ID='div2431';

     @ViewChild("txtView1", {read: ElementRef, static: false}) txtView1: ElementRef;

    addValue() {
        this.name.setValue(this.name.value + 1);
    }

    databindingClick() {
        this.dataB++;
    }

    txtViewClick() {
        this.txtView1.nativeElement.value++;
    }
}
