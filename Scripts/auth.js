// Init auth method.
const auth = new Auth();
console.log("Initalized auth method.")

// Run login method on form submit.
$("#loginForm").submit(function(e) {
    login();
    e.preventDefault();
});

// Check if user is logged.
auth.onAuth((e) => {
    const menuOptions = document.getElementsByClassName("menuOption");
    menuOptions[4].innerHTML = e["displayName"];
    auth.updateProfile({displayName: "SuperKing"});
});

// Check auth user
auth.onAuth((e) => {
    console.log(e);
})

// Login method
function login() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    auth.login(email, password, (e) => {
        console.log(e);
    });
}