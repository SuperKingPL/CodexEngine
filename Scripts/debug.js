// Developer mode.
isDebug = false;

function showError(text, content) {
    const error = document.getElementById("errorContainer");
    const Errortitle = document.getElementById("errortitle");
    const Errorcontent = document.getElementById("errorcontent");

    Errortitle.innerHTML = (text);
    Errorcontent.innerHTML = (content);

    $("#errorContainer").fadeIn(150);
}
function closeError() {
    const error = document.getElementById("errorContainer");
    
    $("#errorContainer").fadeOut(150);
}
function logData(data) {
    const debug = document.getElementById("debug");
    debug.innerHTML = data;
}

function debugonly() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("debug") == "true") {
        isDebug = true;
    }
    // Debug only
    let debugElements = document.getElementsByTagName("debugonly");

    if (!isDebug) {
        for (var i = 0; i < debugElements.length; i++) {
            for (var element of debugElements[i].children) {
                element.style.display = "none";
            }
        }
    }
}
debugonly();