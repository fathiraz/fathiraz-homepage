import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('terminal-header-bootstrap')
export class TerminalHeaderBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="terminal-header d-flex justify-content-between m-1">
                <div class="terminal-buttons">
                    <span class="bg-danger rounded-circle d-inline-block me-2" style="width: 12px; height: 12px;"></span>
                    <span class="bg-warning rounded-circle d-inline-block me-2" style="width: 12px; height: 12px;"></span>
                    <span class="bg-success rounded-circle d-inline-block" style="width: 12px; height: 12px;"></span>
                </div>
                <div class="terminal-title text-light">Resume Terminal</div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'terminal-header-bootstrap': TerminalHeaderBootstrap;
    }
}
