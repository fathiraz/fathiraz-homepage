import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('placeholder-bootstrap')
export class PlaceholderBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property() length = 0;

    render() {
        return html`
            ${Array.from({ length: this.length }, () => html`
                <div class="placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                    <hr class='text-light-emphasis mb-3 mt-3' />
                </div>
            `)}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'placeholder-bootstrap': PlaceholderBootstrap;
    }
}
