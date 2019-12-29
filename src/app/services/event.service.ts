import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EventService {
    uri = 'http://localhost:3000/event';

    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http.get(`${this.uri}`)
    }

    addEvent(eventname,organizer,startdate,enddate,location,website,image,desc) {
        // let startDate = ("" + startdate).substr(0,10) + " " + ("" + startdate).substr(11,5)
        // let endDate = ("" + enddate).substr(0,10) + " " + ("" + enddate).substr(11,5)
        let newEvent = [{
            name: eventname,
            organizer: organizer,
            orgURL: website, 
            startdate: startdate,
            enddate: enddate,
            location: location,
            description: desc,
            img: image
        }]
        return this.http.post(`${this.uri}/create`,newEvent)
    }

    editEvent(id) {
        return this.http.get(`${this.uri}/edit/${id}`);
    }

    updateEvent(id,eventname,organizer,startdate,enddate,location,website,image,desc) {
        // let startDate = ("" + startdate).substr(0,10) + " " + ("" + startdate).substr(11,5)
        // let endDate = ("" + enddate).substr(0,10) + " " + ("" + enddate).substr(11,5)
        let newEvent = {
            name: eventname,
            organizer: organizer,
            orgURL: website, 
            startdate: startdate,
            enddate: enddate,
            location: location,
            description: desc,
            img: image
        }
        return this.http.post(`${this.uri}/update/${id}`, newEvent)
    }

    deleteEvent(id) {
        return this.http.get(`${this.uri}/delete/${id}`);
      }
}