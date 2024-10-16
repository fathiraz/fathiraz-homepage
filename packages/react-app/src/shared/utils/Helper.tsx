import queryString from 'query-string';

import AppBulma from '../components/App/AppBulma';
import AppBootstrap from '../components/App/AppBootstrap';
import AppTailwind from '../components/App/AppTailwind';
import AppUikit from '../components/App/AppUikit';
import ResumeBootstrap from '../components/Resume/ResumeBootstrap';
import ResumeBulma from '../components/Resume/ResumeBulma';
import ResumeTailwind from '../components/Resume/ResumeTailwind';
import ResumeUikit from '../components/Resume/ResumeUikit';

// helper functions for CSS framework management
export const Helper = {

    // extract CSS framework from URL query parameters
    getCssFramework: (): string => {
        const { css } = queryString.parse(window.location.search);
        const frameworkName = (typeof css === 'string' ? css : 'bootstrap').toLowerCase();
        return frameworkName;
    },

    // dynamically import CSS framework based on selection
    importCssFramework: async (framework: string): Promise<void> => {
        const frameworkImports = {
            bootstrap: () => import('bootstrap/dist/css/bootstrap.min.css'),
            bulma: () => import('bulma/css/bulma.min.css'),
            tailwind: () => import('tailwindcss/tailwind.css'),
            uikit: () => import('uikit/dist/css/uikit.min.css'),
        };

        const importFunction = frameworkImports[framework as keyof typeof frameworkImports];
        if (importFunction) {
            await importFunction();
        }
    },

    // render the app based on the selected CSS framework
    renderApp: (framework: string): JSX.Element | null => {
        switch (framework) {
            case 'bulma':
                return <AppBulma appProps={{ CssFramework: framework }} />;
            case 'bootstrap':
                return <AppBootstrap appProps={{ CssFramework: framework }} />;
            case 'tailwind':
                return <AppTailwind appProps={{ CssFramework: framework }} />;
            case 'uikit':
                return <AppUikit appProps={{ CssFramework: framework }} />;
            default:
                return null;
        }
    },

    // render the resume based on the selected CSS framework
    renderResume: (framework: string): JSX.Element | null => {
        switch (framework) {
            case 'bootstrap':
                return <ResumeBootstrap appProps={{ CssFramework: framework }} />;
            case 'bulma':
                return <ResumeBulma appProps={{ CssFramework: framework }} />;
            case 'tailwind':
                return <ResumeTailwind appProps={{ CssFramework: framework }} />;
            case 'uikit':
                return <ResumeUikit appProps={{ CssFramework: framework }} />;
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