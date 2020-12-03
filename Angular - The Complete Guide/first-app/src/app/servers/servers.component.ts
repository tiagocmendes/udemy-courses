import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

    allowNewServer: boolean = false;
    serverCreationStatus: string = 'No server was created!';
    serverName: string = 'Test server';
    serverCreated: boolean = false;
    serversList: string[] = [
        'Test server',
        'Test server 2'
    ];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    public onCreateServer(): void {
        this.serverCreated = true;
        this.serversList.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    public onUpdateServerName(event: Event): void {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}
