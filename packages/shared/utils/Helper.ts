export function handleFrameworkChange(framework: string): void {
    const url = new URL(window.location.toString());
    url.searchParams.set('css', framework);
    window.location.href = url.toString();
}

