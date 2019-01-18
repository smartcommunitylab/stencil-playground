import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'autobus-direzione',
    styleUrl: 'autobus-direzione.css'
})
export class AutobusDirezione {

    @Prop() numero: string;
    @Prop() colore: string;
    @Prop() intestazione: string;
    @Prop() returnLink: string;

    numeroAutobus(): string {
        return this.numero.slice(0, this.numero.length - 1);
    }

    lastLink(event) {
        event = event;
        window.location.href = "http://" + this.returnLink.split("&").join("/");
    }

    tableLink(ev, direzione) {
        ev = ev;
        let s0 = window.location.href.slice(window.location.href.lastIndexOf("/"), window.location.href.length);
        let s1 = window.location.href.slice(0, window.location.href.indexOf("direzione"));
        let s2 = window.location.href.slice(window.location.href.indexOf("direzione") + 10, window.location.href.length);
        let dir = "table/";
        let vector;
        s1 += dir;
        vector = s2.split("/");
        vector[1] = vector[1].slice(0, vector[1].length - 1); 
        if (direzione == "R") {
            vector[1]+= "R";
        } else {
            vector[1] += "A";
        }
        s2 = vector.join('/');
        s2 = s2.slice(0, s2.lastIndexOf("/"));
        let s3 = s1.slice(7, s1.length).split("/").join("&");
        let s4 = s2.split("/").join("&");
        let s5 = s3.slice(0, s3.indexOf("&"));
        s5 += "&direzione&";
        window.location.href = s1 + s2 + "/" + s5 + s4 + s0.split("/").join("&");
    }

    formattedIntestazione(): string {
        return this.intestazione.split(")").join(".").split("_").join(" ").split("@").join("/");
    }

    reverseIntestazione(): string {
        return this.formattedIntestazione().split("-").reverse().join("-");
    }

    render() {
        const styles = {
            '--colore-sfondo': "#" + this.colore
        };
        return [
            <ion-header id="colore">
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <img src="https://png.pngtree.com/element_our/md/20180308/md_5aa0ff956f9cf.png" id="return" onClick={((event) => this.lastLink(event))} />
                    </ion-buttons>
                    <ion-title id="number">Linea {this.numeroAutobus()}</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content padding>
                <a>
                    <div class="direzioneLinee" id="andata" style={styles} onClick={(event) => this.tableLink(event, "A")}><p id="text">{this.formattedIntestazione()}</p></div>
                </a>
                <a>
                    <div class="direzioneLinee" id="ritorno" style={styles} onClick={(event) => this.tableLink(event, "R")}><p id="text">{this.reverseIntestazione()}</p></div>
                </a>
            </ion-content>
        ];
    }
}
