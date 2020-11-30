import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html'
})
export class ServerComponent {
    public serverId: number = 10;
    private serverStatus: string = 'offline';

    public getServerStatus(): string {
        return this.serverStatus;
    }

}