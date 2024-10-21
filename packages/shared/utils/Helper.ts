
// function to handle framework change
export function handleFrameworkChange(framework: string): void {
    const url = new URL(window.location.toString());
    url.searchParams.set('css', framework);
    window.location.href = url.toString();
}

// function to get the CSS framework from the URL query parameters
export function getCssFramework(): string {
    const url = new URL(window.location.toString());
    return url.searchParams.get('css') || 'bootstrap';
}

// function to import the CSS framework
export async function importCssFramework(framework: string): Promise<void> {
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
}
