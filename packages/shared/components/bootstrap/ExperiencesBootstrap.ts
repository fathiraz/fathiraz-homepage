import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Experience } from '../../../shared/utils/Api';

@customElement('experiences-bootstrap')
export class ExperiencesBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: Array }) experiences: Experience[] = [];

    render() {
        return html`
        <div class="row">
            <div class="col-12">
                <p class='text-light text-opacity-75 mb-1 m-0'>
                    <span class='text-primary'>user@portfolio:~$</span> <span class='text-light text-opacity-75'>exp</span>
                </p>
            </div>
            <div class="col-12">
                <div class="row">
                    ${this.experiences.map((experience: Experience) => html`
                        <div class="col-12 p-3 w-100 border border-secondary rounded mt-1 mb-1 bg-black bg-opacity-25">
                            <p class='text-success fw-bold mb-2' style='font-size: 15px;'>
                                ${experience.position} <span class='text-light'>at </span> <span style='color: #C678DD;'>${experience.company}</span>
                            </p>
                            <p class='text-warning fst-italic mb-1' style='font-size: 14px;'>${experience.start_date} - ${experience.end_date} <span class='text-danger'>(${experience.duration})</span></p>
                            <p class='text-light text-opacity-75 mb-1' style='font-size: 13px;'>${experience.summary}</p>
                            <ul class='text-light text-opacity-75 pe-1 mb-0' style='list-style-type: circle;'>
                                ${experience.workarounds.map((workaround: string) => html`
                                    <li class='text-light text-opacity-75 mb-1' style='font-size: 13px;'>${workaround}</li>
                                `)}
                            </ul>
                            <div class="mt-2">
                                ${experience.skills_used.map((skill: string) => html`
                                    <span class="badge text-bg-primary rounded-pill text-wrap bg-primary me-2 mb-2">${skill}</span>
                                `)}
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
        `;
    }
}
