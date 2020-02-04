import { Component } from '@angular/core';
import { HeliosService } from './services/helios.service';
import { ConnectionMaintainer } from './helper/node_connection';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularExtensionProject';

  constructor (private heliosService : HeliosService, public connectionMaintainer : ConnectionMaintainer) {
    console.log('holaa'+this.title);
  }
  

}
