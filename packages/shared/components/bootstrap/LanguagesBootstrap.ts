import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Language } from '../../../shared/utils/Api';

@customElement('languages-bootstrap')
export class LanguagesBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: Array<Language> }) languages: Language[] = [];

    render() {
        return html`
        <div class="row">
            <div class="col-12">
                <p class='text-light text-opacity-75 mb-1 m-0'>
                    <span class='text-primary'>user@portfolio:~$</span> <span>lang</span>
                </p>
            </div>
            <div class="col-12">
                <div class="row">
                    ${this.languages.map((language: Language) => html`
                        <div class="col-12 d-flex justify-content-between mt-1 mb-1 p-1 bg-black bg-opacity-25 rounded border border-secondary">
                            <p class='text-info fw-bold m-0'>${language.language}</p>
                            <p class='text-warning fw-bold m-0'>${language.proficiency}</p>
                        </div>
                    `)}
                </div>
            </div>
        </div>
        `;
    }
}
