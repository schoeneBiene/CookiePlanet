export default function heading(text: string) {
    let heading = document.createElement('div');
    heading.className = 'title';
    heading.textContent = text;
    return heading;
}
