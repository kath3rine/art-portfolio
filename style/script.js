function swapImg(image, source) {
    document.getElementById(image).src = source;
}

function swapText(text, source) {
    document.getElementById(text).innerHTML = source;
}

function updateURL(url, source) {
    document.getElementById(url).href = source;
   }

function captionOn(text, image) {
    document.getElementById(text).style.color = 'var(--col4)';
    document.getElementById(image).style.opacity = 0.2;
}

function captionOff(text, image) {
    document.getElementById(text).style.color = 'transparent';
    document.getElementById(image).style.opacity = 1;
}

function linkOn(link, color) {
    document.getElementById(link).style.color = color;
}

function linkOff(link) {
    document.getElementById(link).style.color = 'transparent'
}