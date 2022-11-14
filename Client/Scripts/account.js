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