import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { handleFrameworkChange } from '../../../shared/utils/Helper';

@customElement('floating-button-bootstrap')
export class FloatingButtonBootstrap extends LitElement {
    createRenderRoot() {
        return this;
    }

    @property({ type: Array }) frameworks: any[] = [];
    @property({ type: String }) currentFramework: string = '';

    render() {
        return html`
        <div class="card position-fixed top-0 end-0 m-2 bg-black bg-opacity-75 border rounded" style="width: 140px;">
            <div class="card-body">
                <h6 class="card-title text-light" style="font-size: 0.7rem;">
                    <i class="devicon-css3-plain me-1"></i> CSS Framework
                </h6>
                <select class="form-select form-select-sm" @change="${this.handleFrameworkChange}" aria-label="CSS" style="font-size: 0.6rem;" .value="${this.currentFramework}">
                    <option value="" disabled>CSS Framework</option>
                    ${this.frameworks.map((framework) => html`
                        <option value="${framework.name}">${framework.name}</option>
                    `)}
                </select>
            </div>
        </div>
        `;
    }

    // handle the framework change
    handleFrameworkChange(e: Event) {
        const select = e.target as HTMLSelectElement;
        handleFrameworkChange(select.value);
    }
}
