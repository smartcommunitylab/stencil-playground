import { Component, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'bus-element',
  styleUrl: 'bus-element.css'
})

export class AutobusUrbani {
  @Prop() text: string;
  @Prop() color: string;
  @Prop() href: string;
  @Prop() identificatore: number;
  @State() marginTop: string;
  @State() marginLeft: string;

  @Element() el: HTMLElement;

  idDefiner(): string {
    return "p" + this.identificatore;
  }

  marginCalculator() {
    let left = 2;
    let top = 5;
    for (let i = 0; i < this.identificatore - 1; i++) {
      left += 120;
      if (left + 100 > window.innerWidth) {
        top += 140;
        left = 2;
      }
    }
    this.marginLeft = left + "px";
    this.marginTop = top + "px";
  }
  @Listen('window:resize')
  handleResize(ev) {
    this.marginCalculator();
    ev = ev;
  }

  render() {
    this.marginCalculator();
    const styles = {
      '--color': this.color,
      '--margin-left': this.marginLeft,
      '--margin-top': this.marginTop
    };
    return [
      <a href={this.href} id="link">
        <p id={this.idDefiner()} class="paragraph" style={styles}>{this.text}</p>
      </a>
    ];
  }
}