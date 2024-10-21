import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Education } from '../../../shared/utils/Api';

@customElement('educations-bootstrap')
export class EducationsBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: Array<Education> }) educations: Education[] = [];

    render() {
        return html`
        <div class="row">
            <div class="col-12">
                <p class='text-light text-opacity-75 mb-1 m-0'>
                    <span class='text-primary'>user@portfolio:~$</span> <span>edu</span>
                </p>
            </div>
            <div class="col-12">
                <div class="row">
                    ${this.educations.map((education: Education) => html`
                        <div class="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                            <p class='text-info fw-bold mb-2' style='font-size: 15px;'>${education.university}</p>
                            <p class='text-warning fw-bold mb-1' style='font-size: 14px;'>${education.location}</p>
                            <p class='fw-bold mb-1' style='font-size: 14px;'>${education.degree} in <span class='text-success'>${education.major}</span></p>
                            <p class='text-danger fw-bold mb-1' style='font-size: 14px;'><span>${education.start}</span> - <span>${education.end}</span></p>
                            <p class='fst-italic text-light text-opacity-75 mb-1' style='font-size: 14px;'>${education.grade}</p>
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
        'educations-bootstrap': EducationsBootstrap;
    }
}
