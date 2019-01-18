import { Component, Prop, State } from '@stencil/core';

let giorniSettimana: string[] = ["DOM", "LUN", "MAR", "MER", "GIO", "VEN", "SAB"];

@Component({
  tag: 'intestazione-tabella',
  styleUrl: 'intestazione-tabella.css'
})

export class tabellaOrari {

  @Prop() linea: string;
  @Prop() intestazione: string;
  @Prop() color: string;
  @Prop() link: string;

  @State() Giorno = new Date();
  @State() ContatoreGiorni: number = 0;
  @State() colore:string;


  data(): string {
    let s = "";
    s += giorniSettimana[this.Giorno.getDay()];
    s += " " + this.Giorno.getDate() + "/" + ((this.Giorno.getMonth() * 1) + 1) + "/" + this.Giorno.getFullYear();
    return s;
  }

  @State() cambiaData(event, inutile) {
    inutile = inutile;
    if (event == "dietro") {
      this.Giorno.setTime(this.Giorno.getTime() - 86400000);
      this.ContatoreGiorni--;
    }
    else {
      this.Giorno.setTime(this.Giorno.getTime() + 86400000);
      this.ContatoreGiorni++;
    }
  }

  formattedColor():string{
   return this.colore = '#' +this.color;
  }

  formattedIntestazione():string{
    return this.intestazione.split(")").join(".").split("_").join(" ").split("@").join("/").replace("%C3%88","è").replace("%C3%A9","è");
  }

  formattedLinea():string{
    return this.linea.split("&").join(".").split("_").join(" ").split("@").join("/");
  }

  goback(event){
    event=event;
    window.location.href=this.link;
  }

  render() {
    const styles = {
      '--colore-sfondo': this.formattedColor()
    };

    return [
      <ion-header id="colore">
        <ion-toolbar color="blue">
          <ion-buttons slot="start">
            <img  src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png"  id="return" onClick={((event) => this.goback(event))} />
          </ion-buttons>
          <ion-title id="number">{this.formattedLinea()}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <div class="container" style={styles}>
        <img id="frecciaSx" src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png" onClick={((event) => this.cambiaData("dietro", event))}></img>
        <img id="frecciaDx" src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png" onClick={((event) => this.cambiaData("avanti", event))}></img>
        <p id="desLinea">{this.formattedIntestazione()}</p>
        <p id="data">{this.data()}</p>
      </div>
    ];
  }

}
