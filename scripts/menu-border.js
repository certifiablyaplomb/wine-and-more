function decoBorder(w, h) {
    const g = '#c9a84c';
    const c = Math.min(46, w*0.07, h*0.07);
    const i1 = 6, i2 = 12, i3 = 18;
    const nb = 16;

    function octPts(inset, cut) {
        const x0 = inset, y0 = inset, x1 = w - inset, y1 = h - inset;
        return `${x0+cut},${y0} ${x1-cut},${y0} ${x1},${y0+cut} ${x1},${y1-cut} ${x1-cut},${y1} ${x0+cut},${y1} ${x0},${y1-cut} ${x0},${y0+cut}`;
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"
        style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;">
        <rect fill="none" stroke="${g}" stroke-width="1.5" x="4" y="4" width="${w-8}" height="${h-8}"/>
        <rect fill="none" stroke="${g}" stroke-width="0.7" opacity="0.5" x="${i1+2}" y="${i1+2}" width="${w-2*(i1+2)}" height="${h-2*(i1+2)}"/>
        <polygon fill="none" stroke="${g}" stroke-width="1.5" points="${octPts(i2, c)}"/>
        <polygon fill="none" stroke="${g}" stroke-width="0.7" opacity="0.5" points="${octPts(i3, c-4)}"/>
        <line stroke="${g}" stroke-width="1.2" x1="${i2}" y1="${i2+c}" x2="${i2+c}" y2="${i2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${i1+2}" y1="${i1+2+c}" x2="${i1+2+c}" y2="${i1+2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${i3}" y1="${i3+c-4}" x2="${i3+c-4}" y2="${i3}"/>
        <line stroke="${g}" stroke-width="1.2" x1="${w-i2}" y1="${i2+c}" x2="${w-i2-c}" y2="${i2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${w-i1-2}" y1="${i1+2+c}" x2="${w-i1-2-c}" y2="${i1+2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${w-i3}" y1="${i3+c-4}" x2="${w-i3-c+4}" y2="${i3}"/>
        <line stroke="${g}" stroke-width="1.2" x1="${w-i2}" y1="${h-i2-c}" x2="${w-i2-c}" y2="${h-i2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${w-i1-2}" y1="${h-i1-2-c}" x2="${w-i1-2-c}" y2="${h-i1-2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${w-i3}" y1="${h-i3-c+4}" x2="${w-i3-c+4}" y2="${h-i3}"/>
        <line stroke="${g}" stroke-width="1.2" x1="${i2}" y1="${h-i2-c}" x2="${i2+c}" y2="${h-i2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${i1+2}" y1="${h-i1-2-c}" x2="${i1+2+c}" y2="${h-i1-2}"/>
        <line stroke="${g}" stroke-width="0.6" opacity="0.5" x1="${i3}" y1="${h-i3-c+4}" x2="${i3+c-4}" y2="${h-i3}"/>
        <rect fill="none" stroke="${g}" stroke-width="1" x="4" y="4" width="${nb}" height="${nb}"/>
        <rect fill="none" stroke="${g}" stroke-width="1" x="${w-4-nb}" y="4" width="${nb}" height="${nb}"/>
        <rect fill="none" stroke="${g}" stroke-width="1" x="${w-4-nb}" y="${h-4-nb}" width="${nb}" height="${nb}"/>
        <rect fill="none" stroke="${g}" stroke-width="1" x="4" y="${h-4-nb}" width="${nb}" height="${nb}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${i2+c}" y1="4" x2="${i2+c}" y2="${i2}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${w-i2-c}" y1="4" x2="${w-i2-c}" y2="${i2}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${i2+c}" y1="${h}" x2="${i2+c}" y2="${h-i2}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${w-i2-c}" y1="${h}" x2="${w-i2-c}" y2="${h-i2}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="4" y1="${i2+c}" x2="${i2}" y2="${i2+c}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${w-4}" y1="${i2+c}" x2="${w-i2}" y2="${i2+c}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="4" y1="${h-i2-c}" x2="${i2}" y2="${h-i2-c}"/>
        <line stroke="${g}" stroke-width="0.7" opacity="0.6" x1="${w-4}" y1="${h-i2-c}" x2="${w-i2}" y2="${h-i2-c}"/>
    </svg>`;
}

function applyDecoBorders() {
    document.querySelectorAll('.menu-section').forEach(section => {
        // Remove any existing SVG border first (for re-runs)
        const existing = section.querySelector('.deco-border-svg');
        if (existing) existing.remove();

        const w = section.offsetWidth;
        const h = section.offsetHeight;
        const wrapper = document.createElement('div');
        wrapper.className = 'deco-border-svg';
        wrapper.innerHTML = decoBorder(w, h);
        section.appendChild(wrapper);
    });
}

window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        applyDecoBorders();
    });
});
let resizeTimeout;

// window.addEventListener('resize', () => {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(() => {
//         applyDecoBorders();
//     }, 100);
// });