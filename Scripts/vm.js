class CodexSprite {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

window.oncontextmenu = function () {
    addTextToViewport(document.getElementById("n").value, 48, "sans-serif", 10, 50);
    var parent = document.getElementById("b");
    parent.style.border = 'solid 5px';
    parent.style.borderColor = '#0082fc';
    return false;
}

function addTextToViewport(text, font_size, font, width, height) {
    const viewport = document.getElementById("project");
    const ctx = viewport.getContext('2d');
    if (viewport.getContext) {
        ctx.clearRect(0, 0, viewport.width, viewport.height);
        ctx.font = font_size + "px " + font;
        ctx.fillText(text, width, height)
    }
}

// const viewport = document.getElementById("project");
// const ctx = viewport.getContext('2d');
// ctx.font = "32px Sans-Serif"
// ctx.fillText('Hello world', 10, 50);