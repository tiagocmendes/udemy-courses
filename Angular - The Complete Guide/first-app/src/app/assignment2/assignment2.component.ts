import { Component } from '@angular/core';

@Component({
    selector: 'assignment2',
    templateUrl: 'assignment2.component.html'
})
export class Assignment2Component {

    username: string = '';

    constructor() {
    }

    public disableButton(): boolean {
        return this.username === '';
    }

    public clearUsername(): void {
        this.username = '';
    }

}
