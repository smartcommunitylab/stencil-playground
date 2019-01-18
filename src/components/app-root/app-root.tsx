import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="project-home" />
          <ion-route url="/grid/:transportType" component="visualization-grid"/>
          <ion-route url="/list/:transportType" component="visualization-list"/>
          <ion-route url="/direzione/:citta/:numero/:intestazione/:colore/:returnLink" component="autobus-direzione"/>
          <ion-route url="/table/:citta/:numero/:intestazione/:colore/:link" component="pagina-orari"/>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
