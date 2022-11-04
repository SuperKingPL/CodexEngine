function showError(text, content) {
    const error = document.getElementById("errorVisibility");
    const Errortitle = document.getElementById("errortitle");
    const Errorcontent = document.getElementById("errorcontent");

    Errortitle.innerHTML = (text);
    Errorcontent.innerHTML = (content);

    error.style.display = 'grid';
}
function closeError() {
    const error = document.getElementById("errorVisibility");
    
    error.style.display = 'none';
}
function logData(data) {
    const debug = document.getElementById("debug");
    debug.innerHTML = data;
}

function replaceColors(text) {
   return text.split("<color").join("<font color");
}