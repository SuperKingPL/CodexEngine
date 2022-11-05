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