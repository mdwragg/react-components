"use client"

import { LitElement, html } from 'lit';
  
export class WcButton extends LitElement {
  static properties = {
    disabled: { type: Boolean },
  };

  render() {
    return html`<button ?disabled=${this.disabled}>Click me</button>`;
  }
}

customElements.define('wc-button', WcButton);

// export const WcButton = createComponent({
//     react: React,
//     tagName: 'wc-button',
//     elementClass: WcButtonClass,
// });