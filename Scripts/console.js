$("#console").draggable({containment: "window"});

var consoleShow = false;

function log(data) {
    const consoleContent = document.getElementById("consolecontent");
    consoleContent.innerHTML = consoleContent.innerHTML + data + "<br>";

    if (!consoleShow) {
        Debug.tooltip("Nowa wiadomość", document.getElementById("showConsole-btn"), "bottom", 5);
    }
}
function showConsole() {
    if (isDebug) {
        const errorSound = new Audio("/Sounds/showError.mp3");
        errorSound.play();
        $("#console").toggle("scale");
        if (!consoleShow) {consoleShow = true} else {consoleShow = false}
    } else {
        Debug.error("Nie masz dostępu do tej funkcji", "Konsola nie jest dostępna w tym trybie.<br><color red>ERR_HTTP_405</color>")
    }
}