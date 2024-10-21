import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('divider-bootstrap')
export class DividerBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property() color = 'text-light-emphasis';

    render() {
        return html`<hr class='${this.color} mb-3 mt-3' />`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'divider-bootstrap': DividerBootstrap;
    }
}
