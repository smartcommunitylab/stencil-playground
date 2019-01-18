import { Component, Prop } from '@stencil/core';
import { data } from '../../data/dati';

@Component({
  tag: 'visualization-grid',
  styleUrl: 'visualization-grid.css'
})
export class AppHome {
  @Prop() transportType: string;
  busList = data.elements.urbano.list[0].groups;

  linkCalculator():string{
    return window.location.href.slice(6,window.location.href.length).split("/").join("&");
  }

  insertList(): string {
    let s = "";
    let count = 0;
    let href: string;
    for (let i of this.busList) {
      count++;
      href="/direzione/" + data.elements.urbano.list[0].agencyId + "/" + i.routes[0].routeSymId + "/" + i.routes[0].title.split(".").join(")").split(" ").join("_").split("/").join("@") + "/" + i.color.slice(1,i.color.length) + "/" + this.linkCalculator();
      s += "<bus-element identificatore=" + count + " text=" + i.label + " color=" + i.color + " href="+href+"></bus-element>";
    }
    return s;
  }

  goback(event){
    event=event;
    window.location.href="/";
  }

  render() {
    return [
      <ion-header id="colore">
        <ion-toolbar color="blue">
        <ion-buttons slot="start">
            <img  src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png"  id="return" onClick={((event) => this.goback(event))} />
          </ion-buttons>
          <ion-title id='number'>lista {this.transportType.toLocaleLowerCase()}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div innerHTML={this.insertList()}></div>
    ];
  }
}