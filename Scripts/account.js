class Account {
    static ban() {
        saveNotifications = false;
        if (window.localStorage.getItem("accountBan") !== "banned") {
            window.localStorage.setItem("accountBan", "banned");
            document.location.reload();
        }
    }
    static unban() {
        saveNotifications = true;
        if (window.localStorage.getItem("accountBan") == "banned") {
            window.localStorage.removeItem("accountBan");
            document.location.reload();
        }
    }
}

// Get ban status
const accountBan = window.localStorage.getItem("accountBan");
if (accountBan == "banned") {
    saveNotifications = false;
    Debug.error("<color red>Account Status</color>", "Your account was banned due community rules break. You can't use Codex Engine.", false);
}
if (accountBan == "banned") {
    setInterval(() => {
        if (document.getElementById("errorContainer") == null || document.getElementById("errorContainer").style.display == "none") {
            document.location.reload();
        }
    }, 300);
}