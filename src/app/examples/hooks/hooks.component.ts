import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-hooks',
    templateUrl: './hooks.component.html',
})

export class HooksComponent implements OnInit, OnChanges {
inputValue="123";

ngOnInit() {
    console.log("1234");

}

ngOnChanges() {
    console.log("1234");
}
}