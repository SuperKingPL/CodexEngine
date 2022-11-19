window.onload = () => {
    // Init database.
    const db = new Firebase();

    // URL Search Params
    const urlParams = new URLSearchParams(window.location.search);

    // User ID
    const userID = urlParams.get("user");

    // Check name by ID.
    db.get("users", userID, (e) => {
        document.title = "Profil użytkownika " + e["name"];
        document.querySelector('.name').textContent = e["name"];
        document.querySelector('.avatar').src = e["avatarURL"]
    });
}