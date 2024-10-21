import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

@customElement('tech-stack-bootstrap')
export class TechStackBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: Array<string> }) technologies = [];

    render() {
        return html`
            <div className="row">
                <div class="col-12">
                    <p class='text-light text-opacity-75 mb-1 m-0'>
                        <span class='text-primary'>user@portfolio:~$</span> <span>techstack</span>
                    </p>
                </div>
                <div class="col-12">
                    <div class="row g-2">
                        ${repeat(this.technologies, (tech: string) => html`
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="d-flex align-items-center rounded border border-secondary bg-black bg-opacity-25 text-light text-opacity-75 p-1 h-100">
                                <i class="devicon-${tech.toLowerCase().replace(/\s+/g, '')}-plain me-2 fs-6"></i>
                                <span>${tech}</span>
                                </div>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tech-stack-bootstrap': TechStackBootstrap;
    }
}
