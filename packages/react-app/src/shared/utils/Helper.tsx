import {
    AppBulma,
    AppBootstrap,
    AppTailwind,
    AppUikit
} from '../components/App';

import {
    ResumeBootstrap,
    ResumeBulma,
    ResumeTailwind,
    ResumeUikit
} from '../components/Resume';

// helper functions for CSS framework management
export const Helper = {

    // render the app based on the selected CSS framework
    renderApp: (framework: string): JSX.Element | null => {
        switch (framework) {
            case 'bulma':
                return <AppBulma AppConfig={{ CssFramework: framework }} />;
            case 'bootstrap':
                return <AppBootstrap AppConfig={{ CssFramework: framework }} />;
            case 'tailwind':
                return <AppTailwind AppConfig={{ CssFramework: framework }} />;
            case 'uikit':
                return <AppUikit AppConfig={{ CssFramework: framework }} />;
            default:
                return null;
        }
    },

    // render the resume based on the selected CSS framework
    renderResume: (framework: string): JSX.Element | null => {
        switch (framework) {
            case 'bootstrap':
                return <ResumeBootstrap AppConfig={{ CssFramework: framework }} />;
            case 'bulma':
                return <ResumeBulma AppConfig={{ CssFramework: framework }} />;
            case 'tailwind':
                return <ResumeTailwind AppConfig={{ CssFramework: framework }} />;
            case 'uikit':
                return <ResumeUikit AppConfig={{ CssFramework: framework }} />;
            default:
                return null;
        }
    },

    // handle framework change
    handleFrameworkChange: (framework: string): void => {
        const url = new URL(window.location.toString());
        url.searchParams.set('css', framework);
        window.location.href = url.toString();
    },
};
