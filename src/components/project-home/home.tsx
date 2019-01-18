import { Component } from '@stencil/core';
import { data } from '../../data/dati';

@Component({
  tag: 'project-home',
  styleUrl: 'home.css'
})
export class AppHome {
  listaMezzi: string[] = ["autobus urbani", "treni", "autobus extraurbani"];
  counter: number = 0;

  InsertElement(mezzo: string) {
    this.counter++;
    switch (mezzo) {
      case "BUS":
        return [
          <a href={"/" + data.elements.urbano.view + "/" + data.elements.urbano.transportType}>
            <div class="button" id={"btn" + this.counter} >{this.listaMezzi[0]}</div>
          </a>
        ];
      case "TRAIN":
        return [
          <a href={"/" + data.elements.trains.view + "/" + data.elements.trains.transportType}>
            <div class="button" id={"btn" + this.counter} >{this.listaMezzi[1]}</div>
          </a>
        ];
      case "BUSSUBURBAN":
        return [
          <a href={"/" + data.elements.extraurbano.view + "/" + data.elements.extraurbano.transportType}>
            <div class="button" id={"btn" + this.counter} >{this.listaMezzi[2]}</div>
          </a>
        ];
    }

  }

  render() {
    return [
      <ion-header id="colore">
        <ion-toolbar color="blue">
          <ion-title id="number">Viaggia Rovereto</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        {this.InsertElement(data.elements.urbano.transportType)}
        {this.InsertElement(data.elements.trains.transportType)}
        {this.InsertElement(data.elements.extraurbano.transportType)}
      </ion-content>
    ];
  }
}