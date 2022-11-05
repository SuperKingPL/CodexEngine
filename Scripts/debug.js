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

function displayTooltip(tooltipText, object, type, interval = 3) {
    var tooltip = document.createElement("tooltip");
    var tooltipText = document.createTextNode(tooltipText);
    if (type == "top" || type == "bottom" || type == "left" || type == "right") {
        tooltip.setAttribute("type", type);
        tooltip.appendChild(tooltipText);
        object.appendChild(tooltip);
        $(tooltip).fadeIn(450);
        if (interval !== null) {
            setTimeout(() => {
                $(tooltip).fadeOut(450);
            }, interval * 1000);
        }
    } else {
        console.error("Cannot set tooltip. Invalid type.")
    }
}