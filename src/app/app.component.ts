import { Component } from '@angular/core';
import { ethers } from 'ethers';
import { Gasolina } from './domain/Gasolina';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
declare global {
  interface Window {
    ethereum: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'primax-dapp';
  walletDir:String = '';
  PrecioTotal = 0;
  //private web3:Web3;

  listGasolina:Gasolina[] = []
  group: FormGroup | any;

  constructor() {
    //this.web3 = new Web3("web3-provider-url");
    this.setForm();
  }

  ngOnInit(): void {
    let gasolina:Gasolina =
    {
      "codigo": 1,
      "descripcion" : "GLP",//GPRIX-PREMIUM, GPRIX-REGULAR
      "precio": "10",
      "cantidad" : ""
    }
    let gasolina2:Gasolina =
    {
      "codigo": 2,
      "descripcion" : "GPRIX-PREMIUM",//GPRIX-PREMIUM, GPRIX-REGULAR
      "precio": "10",
      "cantidad" : ""
    }
    let gasolina3:Gasolina =
    {
      "codigo": 3,
      "descripcion" : "GPRIX-REGULAR",//GPRIX-PREMIUM, GPRIX-REGULAR
      "precio": "10",
      "cantidad" : ""
    }
    this.listGasolina.push(gasolina);
    this.listGasolina.push(gasolina2);
    this.listGasolina.push(gasolina3);
  }

  onChangeTipoGasolina(id:any){
    console.log("onChangeTipoGasolina : "  + id);
    this.CodigoGasolina.setValue(id);
  }

  onChangeCantidad() {
    console.log(this.Cantidad.value)
    console.log("this.CodigoGasolina.value : " + this.CodigoGasolina.value)
    this.listGasolina.forEach(element => {
      console.log("lement.codigo: " + element.codigo)
      console.log("if: " + (element.codigo == this.CodigoGasolina.value))
      if(element.codigo == this.CodigoGasolina.value) {
        let precioTotal = element.codigo == undefined ? 0 : Number(this.Cantidad.value)  * this.Cantidad.value;
        this.PrecioTotal = (precioTotal);
      }
    });
    console.log("this.PrecioTotal: " + this.PrecioTotal)
  }

  setForm() {
    this.group = new FormGroup({
      codigoGasolina: new FormControl(""),
      cantidad: new FormControl(""),
      resumen: new FormControl(""),


    });
  }

  get CodigoGasolina(): AbstractControl { return this.group.get(['codigoGasolina']); }
  get Cantidad(): AbstractControl { return this.group.get(['cantidad']); }
  get Resumen(): AbstractControl { return this.group.get(['resumen']); }


  async connectToMetamask(): Promise<void> {

    // Comprobar si Metamask está disponible en el navegador
    console.log("test funcjona")


    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const ethers = require("ethers")
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Obtener la dirección del usuario conectado
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log('Conectado a MetaMask:', address);
        this.walletDir = address;
      } catch (error) {
        console.error('Error al conectar con MetaMask:', error);
      }
    } else {
      console.error('MetaMask no está instalado.');
    }

  }



}



