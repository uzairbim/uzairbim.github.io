// Light syntax colouring for decorative code: comments, strings, IFC and XML names, keywords.
const KEYWORDS = /\b(import|from|def|return|for|in|if|not|while|with|as|is|and|or|lambda|True|False|None|OUT|IN)\b/g;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function colour(code: string): string {
  return code.split('\n').map((line) => {
    const hash = line.match(/^(\s*)(#(?!\d).*)$/);
    if (hash) return `${esc(hash[1])}<i class="c">${esc(hash[2])}</i>`;
    // A trailing "  # comment" after code.
    let tail = '';
    const cut = line.indexOf('  # ');
    if (cut > 0) { tail = `  <i class="c">${esc(line.slice(cut + 2))}</i>`; line = line.slice(0, cut); }
    let out = esc(line);
    out = out.replace(/('[^']*'|&quot;[^&]*&quot;|"[^"]*")/g, '<i class="s">$1</i>');
    out = out.replace(/\b(IFC[A-Z]+)\b/g, '<i class="k">$1</i>');
    out = out.replace(/(&lt;\/?)([A-Za-z]+)/g, '$1<i class="k">$2</i>');
    out = out.split(/(<i[^>]*>.*?<\/i>)/).map((part) => (part.startsWith('<i') ? part : part.replace(KEYWORDS, '<i class="k">$1</i>'))).join('');
    return out + tail;
  }).join('\n');
}

