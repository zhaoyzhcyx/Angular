import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { EventService } from '../services/event.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-eventedit',
    templateUrl: './event-edit.component.html',
})

export class EventEditComponent implements OnInit {
    events = [];
    eventForm: FormGroup

    constructor(private fb: FormBuilder,
        private eventService: EventService,
        private route: ActivatedRoute,
        private router: Router) {
        this.createForm()
    }

    createForm() {
        this.eventForm = this.fb.group({
            eventname: '',
            organizer: '',
            startdate: '',
            enddate: '',
            location: '',
            website: '',
            image: '',
            desc: ''
        })
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.eventService.editEvent(params['id']).subscribe(data => {
                this.events = data[0];
            });
        });
    }

    updateEvent(eventname, organizer, startdate, enddate, location, website, image, desc) {
        this.route.params.subscribe(params => {
            this.eventService.updateEvent(params.id, eventname, organizer, startdate, enddate, location, website, image, desc).subscribe((data) => {
                if ( data[0].result == 'ok') {
                    this.router.navigate(['events']);
                    // document.location = "/events"
                }
            })
        })
    }

    deleteEvent() {
        this.route.params.subscribe(params => {
            this.eventService.deleteEvent(params.id).subscribe((data) => {
                if ( data[0].result == 'ok') {
                    this.router.navigate(['events']);
                    // document.location = "/events"
                }
            })
        })
    }

}