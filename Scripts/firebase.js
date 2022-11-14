
    const firebaseConfig = {
        apiKey: "AIzaSyDvIXvBIAifLzouK63Lec_m_nqVjLxkj1I",
        authDomain: "codex-engine-a8162.firebaseapp.com",
        databaseURL: "https://codex-engine-a8162-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "codex-engine-a8162",
        storageBucket: "codex-engine-a8162.appspot.com",
        messagingSenderId: "728750549738",
        appId: "1:728750549738:web:0a41f22844ff75f040c593",
        measurementId: "G-QK3BK71G18"
    };
    // Initalize firebase

    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();

    var test = "test";

    firestore.collection("users").add({
        name: test,
        created: Date.now()
    });