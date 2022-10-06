import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface Patient {
    name: string;
    surname: string;
    appointmentDate: Date;
    id: number;
}

@Injectable()
export class PatientsService {
    private readonly dataStream = new BehaviorSubject<Patient[]>([{
        name: 'Vladyslav',
        surname: 'Hrossu',
        id: 1,
        appointmentDate: new Date()
    }]);

    public get patients$(): Observable<Patient[]> {
        return this.dataStream.asObservable();
    }

    public get patients(): Patient[] {
        return this.dataStream.getValue();
    }

    public addPatient(patient: Patient): void {
        this.dataStream.next([...this.patients, {...patient, id: this.generateId()}]);
    }

    public removePatient(patient: Patient): void {
        this.dataStream.next([...this.patients.filter(({id}) => id !== patient.id)]);
    }

    private generateId(): number {
        const unitArray = new Uint8Array(8);

        return Number(crypto.getRandomValues(unitArray).join(''));
    }
}
