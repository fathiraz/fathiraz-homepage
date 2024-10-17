import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('footer-bootstrap')
export class FooterBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property() cssFramework = '';

    render() {
        return html`
        <div class="row">
            <div class="col-12">
                <p class="text-light text-center fw-bold mb-3" style="font-size: 12px;">
                Copyright © ${new Date().getFullYear()} Fathiraz. <br />
                Made with 🩵 using React JS framework with Vite and ${this.cssFramework.charAt(0).toUpperCase() + this.cssFramework.slice(1)} CSS framework
                </p>
            </div>
        </div>
    `;
    }
}
