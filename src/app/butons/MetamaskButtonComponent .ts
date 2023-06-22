import { Windowx } from './../custom.d';
import { Component } from '@angular/core';
//import Web3 from 'web3';

@Component({
  selector: 'app-metamask-button',
  template: `
    <button (click)="connectToMetamask()">Conectar a Metamask</button>
  `,
})
export class MetamaskButtonComponent {
  async connectToMetamask(): Promise<void> {
    // Comprobar si Metamask está disponible en el navegador
    console.log("test funcjona")

  }
}
