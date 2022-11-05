// Developer mode.
isDebug = false;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function showError(text, content) {
    const errorSound = new Audio("/Sounds/showError.mp3");
    errorSound.play();

    const error = document.getElementById("errorContainer");
    const Errortitle = document.getElementById("errortitle");
    const Errorcontent = document.getElementById("errorcontent");

    Errortitle.innerHTML = (text);
    Errorcontent.innerHTML = (content);

    $("#errorContainer").fadeIn(150);
}
function closeError() {
    const errorSound = new Audio("/Sounds/hideError.mp3");
    errorSound.play();

    $("#errorContainer").fadeOut(150);
}
function logData(data) {
    const debug = document.getElementById("debugData");
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