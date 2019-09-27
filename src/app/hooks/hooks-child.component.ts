import { Component, Input, DoCheck, OnChanges, OnInit, EventEmitter } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component ({
    selector: 'app-hooks-child',
    template: `
    <div *ngFor="let message of ms1.messages"> {{message}} </div>
    `,
})

export class HooksChildComponent implements DoCheck, OnChanges {
    @Input() inputValue: String;

    changeLog: string[]=[];
    initedValue='';


    constructor(private ms1: MessageService) {
        ms1.add(`constructor loaded, inited value is "${this.initedValue}"`);
        //this.changeLog.push(`constructor loaded, inited value is "${this.initedValue}"`);
    }

    ngDoCheck() {
        //this.changeLog.push(`docheck is trigred, inited value is "${this.initedValue}"`);
        //console.log('11docheck');
    }

    ngOnChanges() {
        
        //for (let propName in changes) {
            //this.changeLog.push(`onchange "${this.inputValue}", inited value is "${this.initedValue}"`);
            this.ms1.add(`onchange "${this.inputValue}", inited value is "${this.initedValue}"`);
            console.log(this.inputValue);
        //}
    }

    ngOnInit() {
        this.initedValue='oninit';
        this.inputValue='inited by oninit';
    }
}