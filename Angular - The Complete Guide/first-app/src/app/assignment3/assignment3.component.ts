import { Component } from '@angular/core';

@Component({
    selector: 'assignment3',
    templateUrl: 'assignment3.component.html',
    styles: [
        `.white {
            color: white;
        }
        `
    ]
})
export class Assignment3Component {

    buttonText: string = 'Hide details';
    showDetails: boolean = true;
    clicks: Date[] = [];

    constructor() {

    }

    public toggleDisplay(): void {
        this.showDetails = !this.showDetails;
        this.buttonText = this.showDetails ? 'Hide details' : 'Show details';
        this.clicks.push(new Date());
    }

}
