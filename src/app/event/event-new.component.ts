import { Component } from '@angular/core';
import { EventService } from '../services/event.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-eventnew',
    templateUrl: './event-new.component.html',
})

export class EventNewComponent { 
    eventForm: FormGroup

    constructor(private fb: FormBuilder, private eventService: EventService, private router: Router) { 
        this.createForm();
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

    addEvent(eventname,organizer,startdate,enddate,location,website,image,desc) {
        this.eventService.addEvent(eventname,organizer,startdate,enddate,location,website,image,desc).subscribe((data) => {
            if (data[0].result == 'ok') {
                this.router.navigate(['event']);
                // document.location = "/events"
            }
        })
    }
}