import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tools-bootstrap')
export class ToolsBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: String }) tools = '';

    render() {

        // split technologies string into array
        const tools = this.tools.split(',');

        return html`
            <div class="col-12">
                <p class='text-light text-opacity-75 mb-1 m-0'>
                    <span class='text-primary'>user@portfolio:~$</span> <span>tools</span>
                </p>
            </div>
            <div class="col-12">
                <div class="row g-2">
                    ${tools.map((tool) => html`
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="d-flex align-items-center rounded border border-secondary bg-black bg-opacity-25 text-light text-opacity-75 p-1 h-100">
                        <i class="devicon-${tool.toLowerCase().replace(/\s+/g, '')}-plain me-2 fs-6"></i>
                        <span>${tool}</span>
                        </div>
                    </div>
                    `)}
                </div>
            </div>
        `;
    }
}
