import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('who-am-i-bootstrap')
export class WhoAmIBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: String }) name = '';
    @property({ type: String }) title = '';
    @property({ type: String }) summary = '';
    @property({ type: String }) work_preference = '';
    @property({ type: String }) linkedin = '';
    @property({ type: String }) github = '';

    render() {
        return html`
            <div className="col-12"></div>
                <div class='m-9 d-flex flex-column gap-1'>
                    <p class='text-light text-opacity-75 mb-1 m-0'>
                    <span class='text-primary'>user@portfolio:~$</span> <span>whoami</span>
                    </p>
                    <p class='text-light text-opacity-75 m-0'>👋🏻 Hello, I'm <span class='text-success'>${this.name}</span></p>
                    <p class='text-light text-opacity-75 m-0'>📕 <span class='text-warning'>${this.title}</span></p>
                    <p class='text-light text-opacity-75 m-0'>📖 <span>${this.summary}</span></p>
                    <p class='text-light text-opacity-75 m-0'>🌏 <span>${this.work_preference}</span></p>
                    <p class='text-light text-opacity-75 m-0'>
                    🔗 <a class='text-info text-decoration-none' href="https://${this.linkedin}" target="_blank" rel="noopener noreferrer">${this.linkedin}</a>
                    </p> 
                    <p class='text-light text-opacity-75 m-0'>
                    🐙 <a class='text-info text-decoration-none' href="https://${this.github}" target="_blank" rel="noopener noreferrer">${this.github}</a>
                    </p>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'who-am-i-bootstrap': WhoAmIBootstrap;
    }
}