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

var projectRunning = false;

function runProject() {

    showError("Odtwarzania projektów nie jest jeszcze dostępne.", "Codex Engine jest w fazie BETA, przez co nie wszystkie funkcje są dostępne. <color blue>Masz tutaj padający śnieg, dla rozluźnienia :)</color>")

    if (!projectRunning) {
        const snowflakes = document.createElement("div");
        snowflakes.id = "snowflakes";
        document.body.insertBefore(snowflakes, document.body.firstChild);
        for (var i = 0; i < 12; i++) {
            const snowflake = document.createElement("div");
            const snowflakeContent = document.createTextNode("❆");
            snowflake.appendChild(snowflakeContent);
            snowflakes.appendChild(snowflake);
            snowflake.className = "snowflake";
        }
        projectRunning = true;
    } else {
        const snowflakes = document.getElementById("snowflakes");
        snowflakes.innerHTML = "";
        snowflakes.remove();
        projectRunning = false;
    }
}

showError("Codex Engine 2.0", "<b>Co nowego?</b><br>・system przesuwania bloczków.<br>・wiadomość przy uruchomieniu projektu.<br>・skrypty, kompatybilności Codex Engine ze Scratchem.<br>・Typy bloków<br>・Debuger Scratcha<br>・Naprawy błędów (w tym ekranu).")
logData("Wydanie oficjalne 1.0. Wczesny dostęp.");