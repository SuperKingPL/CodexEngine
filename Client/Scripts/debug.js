isDebug = false;
saveNotifications = window.localStorage.getItem("saveNotify");
if (saveNotifications == null) {
    saveNotifications = false;
}



function saveChangesNotify() {
        if (saveNotifications) {
        // Save changes notification.
        window.addEventListener('beforeunload', function (e) {
            if (!isDebug) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }
}

saveChangesNotify();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Debug {
    // Display error.
    static error(text, content, button=true) {
        const errorSound = new Audio("/Sounds/showError.mp3");
        errorSound.play();
        document.body.style.overflow = "hidden";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const error = document.getElementById("errorContainer");
        const Errortitle = document.getElementById("errortitle");
        const Errorcontent = document.getElementById("errorcontent");
        
        if (!button) {
            document.getElementById("closeErrorBTN").remove();
        }

        Errortitle.innerHTML = (text);
        Errorcontent.innerHTML = (content);
    
        $("#errorContainer").fadeIn(150);
    }
    // Close error.
    static closeError() {
        const errorSound = new Audio("/Sounds/hideError.mp3");
        errorSound.play();
        document.body.style.overflow = "unset";
        $("#errorContainer").fadeOut(150);
    }
    static setState(data) {
        const debug = document.getElementById("debugData");
        debug.innerHTML = data;
    }
    static tooltip(tooltipText, object, type, interval = 3) {
        // Remove exsisting tooltip.
        for (var i = 0; i < object.children.length; i++) {
            if (object.children[i].tagName == "TOOLTIP") {
                object.children[i].remove();
            }
        }
    
        // Create tooltip with style.
        var tooltip = document.createElement("tooltip");
        var tooltipText = document.createTextNode(tooltipText);
        if (type == "top" || type == "bottom" || type == "left" || type == "right") {
            tooltip.setAttribute("type", type);
            tooltip.appendChild(tooltipText);
            object.appendChild(tooltip);
            $(tooltip).fadeIn(450);
            if (interval !== null) {
                setTimeout(() => {
                    $(tooltip).fadeOut(450, () => {tooltip.remove();});
                }, interval * 1000);
            }
        } else {
            // Display Console Error.
            console.error("Cannot set tooltip. Invalid type.")
        }
    }
    static showConsole() {
        if (!isDebug) {
            Debug.error('Ta funkcja nie jest jeszcze dostępna.', 'Ta funkcja nie jest dostępna w tym trybie.<br><br><color blue>ERR_HTTPPOST_405</color>');
        } else {

        }
    }
}

// Debug only parent
function debugonly() {
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
function warnUnauthorized() {
    console.log("%cZACZEKAJ!", "color: red; font-size: 70px; border: solid; text-shadow: 2px 2px #000");
    console.log("%cJeśli ktoś powiedział Ci, żebyś coś skopiował i wkleił tutaj, to istnieje szansa 11/10 na to, że próbuje Cię oszukać.", "font-size: 20px;");
}
function randomCharArray(lenght)  {
    const charArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var result = '';
    for (var i = 0; i < lenght; i++) {
        result += charArray.charAt(Math.floor(Math.random() * lenght));
    }
    return result;
}
function setToken() {
    const URLParams = new URLSearchParams(window.location.search);
    const token = URLParams.get("token");
    if (token == null) {
        window.localStorage.setItem("appToken", randomCharArray(16 * 2));
    } else {
        window.localStorage.setItem("appToken", "127001");
    }
}
setToken();
debugonly();
saveChangesNotify();
warnUnauthorized();

// Acount
// Account class
class Account {
    // Ban account;
    static ban(reason) {
        saveNotifications = false;
        if (window.localStorage.getItem("accountBan") !== "banned") {
            window.localStorage.setItem("accountBan", "banned");
            window.localStorage.setItem("accountBanReason", reason)
            document.location.reload();
        }
    }
    // Unban account.
    static unban() {
        saveNotifications = true;
        if (window.localStorage.getItem("accountBan") == "banned") {
            window.localStorage.removeItem("accountBan");
            window.localStorage.removeItem("accountBanReason");
            document.location.reload();
        }
    }
    static banned() {
        return window.localStorage.getItem("accountBan") == "banned"
    }
}

// Get ban status
const accountBan = window.localStorage.getItem("accountBan");
if (accountBan == "banned") {
    const banReason = window.localStorage.getItem("accountBanReason");
    saveNotifications = false;
    Debug.error("<color red>Account Status</color>", `Your account was banned due community rules break. You can't use Codex Engine.<br><br><color red>Reason: ${banReason}</color>`, false);
}
if (accountBan == "banned") {
    setInterval(() => {
        const error = document.getElementById("errorContainer");
        if (error == null || document.getElementsByClassName("error")[0] == null || error.style.display == "none") {
            document.location.reload();
        }
    }, 300);
}
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("debug") == "true") {
    if (window.localStorage.getItem("appToken") == "123") {
        isDebug = true;
    } else {
        Account.ban("Hacks and blacklisted 3rd party software.");
    }
}
if (!isDebug) {
    if (!Account.banned()) {
        Debug.error("Codex Engine 2.1", "<b>Co nowego?</b><br>・Naprawiono błędy wyświetlania okien modalnych.<br>・Uporządkowano kod.<br>・Naprawiono błąd (tooltip).<br>・Nowa konsola (tylko w trybie dewelopera).")
    }
}