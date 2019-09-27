import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { MessageService } from '../services/message.service';

@Component ({
    selector: 'app-observable',
    templateUrl: './observable.component.html'
})

export class ObservableComponent {

    constructor(private ms: MessageService) {}

    sequenceSubscriber(observer) {
        // synchronously deliver 1, 2, and 3, then complete
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
         
        // unsubscribe function doesn't need to do anything in this
        // because values are delivered synchronously
        return {unsubscribe() {}};
    }
         
    callObservable() {

        // Create a new Observable that will deliver the above sequence
        const sequence = new Observable(this.sequenceSubscriber);

        const myObserver={
            next: x => this.ms.add('observer got a next value ' +x),
            error: err =>this.ms.add('observer got an error: ' + err),
            complete: () => this.ms.add('observer got a complete notification'),
        };

        sequence.subscribe(myObserver);
    }

}