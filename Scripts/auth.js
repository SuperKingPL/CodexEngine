// Init auth method.
const auth = new Auth();
console.log("Initalized auth method.")

//auth.register("superkingdsc@gmail.com", "mojehaslo1");

$("#loginForm").submit(function(e) {
    login();
    e.preventDefault();
});

auth.onAuth((e) => {
    console.log(e);
})

function login() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    console.log(email);
    auth.login(email, password, (e) => {
        console.log(e);
    });

}