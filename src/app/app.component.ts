import {Component, Inject, OnInit} from '@angular/core';
import {Patient, PatientsService} from "./patients.service";
import {EVENT_BUS, MfeEventBus} from "mfe-tools";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        @Inject('patients') private readonly patientsService: PatientsService,
        // Lose coupled version
        @Inject(EVENT_BUS) private readonly eventBus: MfeEventBus
    ) {
    }

    public ngOnInit(): void {
        // Lose coupled version

        this.eventBus.eventBus$.pipe().subscribe(({eventType, payload}) => {
            console.log(eventType)
            if (eventType === 'addPatient') {
                this.patientsService.addPatient(payload as Patient)
            }
        })
    }
}
