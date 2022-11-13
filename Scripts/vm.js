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

    Debug.error("Odtwarzania projektów nie jest jeszcze dostępne.", "Codex Engine jest w fazie BETA, przez co nie wszystkie funkcje są dostępne. <color blue>Masz tutaj padający śnieg, dla rozluźnienia :)</color>")

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

if (!isDebug) {
    Debug.error("Codex Engine 2.1", "<b>Co nowego?</b><br>・Naprawiono błędy wyświetlania okien modalnych.<br>・Uporządkowano kod.<br>・Naprawiono błąd (tooltip).<br>・Nowa konsola (tylko w trybie dewelopera).")
}
Debug.setState("Wydanie beta 2.1. Wczesny dostęp.");

function save() {
    var project = new Blob(["PROJECT CONTENT SOON."], {type: "text/plain;charset=utf-8"})
    saveAs(project, "project.cdx");
}
document.body.scrollTop = document.documentElement.scrollTop = 0;