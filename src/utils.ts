export function scrollHandler(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
}