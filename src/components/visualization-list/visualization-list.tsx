import { Component, Prop, State, Listen } from '@stencil/core';
import { data } from '../../data/dati';

@Component({
  tag: 'visualization-list',
  styleUrl: 'visualization-list.css'
})
export class AppHome {
  @Prop() transportType: string;
  nome = "";
  @State() color: string;

  linkCalculator():string{
    return window.location.href.slice(6,window.location.href.length).split("/").join("&");
  }

  insertList(): string {
    let root = document.documentElement;
    root.style.setProperty('--dim-fermate-wid', (window.innerWidth).toString() + 'px');
    root.style.setProperty('--dim-fermate-hei', (window.innerHeight - (window.innerHeight / 100 * 20)).toString() + 'px');
    let s = "<div id='myDIV'><div id='content'>";
    switch (this.transportType) {
      case "TRAIN":
        for (let i in data.elements.trains.list) {
          s += "<a class=element href=/table/" + data.elements.trains.list[i].agencyId + "/" + data.elements.trains.list[i].routes[0].routeSymId + "/" + data.elements.trains.list[i].routes[0].title.split(".").join(")").split(" ").join("_") + "/" + data.elements.trains.list[i].color.slice(1,data.elements.trains.list[i].color.length) + "/" + this.linkCalculator()+"><p class='txt'>" + data.elements.trains.list[i].routes[0].title + "</p></a></br>";
          s += "<a class=element href=/table/" + data.elements.trains.list[i].agencyId + "/" + data.elements.trains.list[i].routes[1].routeSymId + "/" + data.elements.trains.list[i].routes[1].title.replace(" ","_").split(".").join(")").split(" ").join("_") + "/" + data.elements.trains.list[i].color.slice(1,data.elements.trains.list[i].color.length) + "/" + this.linkCalculator()+"><p class='txt'>" + data.elements.trains.list[i].routes[1].title + "</p></a></br>";
        }
        break;
      case "BUSSUBURBAN":
        for (let i in data.elements.extraurbano.list[0].groups) {
          s += "<a class=element href=/table/" + data.elements.extraurbano.list[0].agencyId + "/" + data.elements.extraurbano.list[0].groups[i].routes[0].routeSymId + "/" + data.elements.extraurbano.list[0].groups[i].routes[0].title.split(".").join(")").split(" ").join("_") + "/" + data.elements.extraurbano.list[0].groups[i].color.slice(1,data.elements.extraurbano.list[0].groups[i].color.length) + "/" + this.linkCalculator()+"><p class='txt'>" + data.elements.extraurbano.list[0].groups[i].routes[0].title + "</p></a></br>";
          try {
            s += "<a class=element href=/table/" + data.elements.extraurbano.list[0].agencyId + "/" + data.elements.extraurbano.list[0].groups[i].routes[1].routeSymId + "/" + data.elements.extraurbano.list[0].groups[i].routes[1].title.split(".").join(")").split(" ").join("_") + "/" + data.elements.extraurbano.list[0].groups[i].color.slice(1,data.elements.extraurbano.list[0].groups[i].color.length) + "/" + this.linkCalculator()+"><p class='txt'>" + data.elements.extraurbano.list[0].groups[i].routes[1].title + "</p></a></br>";
          } catch (s) { }
        }
        break;
    }
    s += "</div></div>";
    return s;
  }
  startDefine(): string {
    switch (this.transportType) {
      case "TRAIN":
        this.color = data.elements.trains.list[0].color;
        return "treni";
      case "BUSSUBURBAN":
        this.color = data.elements.extraurbano.list[0].groups[0].color;
        return "extraurbani"
      default:
        this.color = "#aaa";
        return "mezzi";
    }
  }
  @Listen('window:resize')
  handleResize(ev) {
    this.insertList();
    ev = ev;
  }

  goback(event){
    event=event;
    window.location.href="/";
  }

  render() {
    this.nome = this.startDefine();
    const styles = {
      '--color': this.color
    };
    return [

      <ion-header id="colore">
        <ion-toolbar color="blue">
        <ion-buttons slot="start">
            <img  src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png"  id="return" onClick={((event) => this.goback(event))} />
          </ion-buttons>
          <ion-title id='number'>Lista {this.nome.toLocaleLowerCase()}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <div id="container" style={styles} innerHTML={this.insertList()}></div>
    ];
  }
}