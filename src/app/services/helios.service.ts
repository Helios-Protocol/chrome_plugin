import { Injectable } from '@angular/core';
 import  {web3,web3_main} from 'helios-utils';
import { ConnectionMaintainer } from 'src/app/helper/node_connection';
@Injectable({
  providedIn: 'root'
})
export class HeliosService {
  
  helios_web3 = web3_main.web3;
  availableNodes = {
      1: [
          "wss://bootnode.heliosprotocol.io:30304",
          "wss://bootnode2.heliosprotocol.io:30304",
          "wss://bootnode3.heliosprotocol.io:30304",
          "wss://masternode1.heliosprotocol.io:30304"
      ],
      42: [
          "wss://hypothesis1.heliosprotocol.io:30304"
      ]
  };
  
  constructor() {
    var connectionMaintainer = new ConnectionMaintainer(this.helios_web3, this.availableNodes,undefined,undefined);
    connectionMaintainer.startNetworkConnectionMaintainerLoop();
    connectionMaintainer.isConnected();

   }
}
