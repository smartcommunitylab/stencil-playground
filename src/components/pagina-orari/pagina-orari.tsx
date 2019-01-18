import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'pagina-orari',
    styleUrl: 'pagina-orari.css'
})
export class AppHome {
    @Prop() numero: string;
    @Prop() colore: string;
    @Prop() citta: string;
    @Prop() intestazione: string;
    @Prop() link: string;

    lastLink(): string {
        if (this.link.indexOf("&&") != -1) {
            let s1 = this.link.slice(0, this.link.indexOf("&&"));
            let s2 = this.link.slice(this.link.indexOf("&&"), this.link.length);
            return "http://" + s1.split("&").join("/") + "/" + s2;
        }
        return "http://" + this.link.split('&').join('/');
    }

    numeroAutobus(): string {
        return this.numero.slice(0, this.numero.length - 1);
    }

    DirezioneIntestazione(): string {
        if (this.numero.indexOf("A") == -1) {
            return this.intestazione.split("-").reverse().join("-");
        }
        else {
            return this.intestazione;
        }
    }

    render() {
        console.log(this.colore);
        return [
            <intestazione-tabella intestazione={this.DirezioneIntestazione()} linea={this.numeroAutobus()} color={this.colore} link={this.lastLink()}></ intestazione-tabella>,
            <tabella-orari numero={this.numero} citta={this.citta}></tabella-orari>
        ];
    }
}