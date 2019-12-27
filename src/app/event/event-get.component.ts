import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service'


@Component({
    selector: 'app-events',
    templateUrl: './event-get.component.html',
})

export class EventGetComponent implements OnInit {
    events;
    constructor(private eventService: EventService) {}

    ngOnInit() {
        this.eventService.getEvents().subscribe((data) => {
            this.events = data;
        })
    }

}