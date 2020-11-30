import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `<h3>Warning</h3>`,
    styles: [`
        h3 {
            padding: 20px;
            border: 1px solid darkred;
            background-color: lightcoral;
            color: darkred;
        }
    `]
})
export class WarningAlertComponent {}