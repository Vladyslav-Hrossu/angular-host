import {Component, Inject} from '@angular/core';
import {Patient, PatientsService} from "../patients.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public get patients$(): Observable<Patient[]> {
        return this.patientsService.patients$;
    }

    constructor(
        @Inject('patients') private readonly patientsService: PatientsService,
    ) {
    }


    public removeAppointment(patient: Patient): void {
        this.patientsService.removePatient(patient);
    }
}
