import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {PatientsService} from "./patients.service";
import {EventBusModule} from "mfe-tools";

@NgModule({
    declarations: [
        AppComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EventBusModule.forRoot()
    ],
    providers: [
        {
            provide: 'patients',
            useClass: PatientsService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
