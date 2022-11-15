// Database class definition.
class Firebase {

    // Main constructor of new() statement.
    constructor() {

        // Paste your firebase config here.
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

        // Initalize firebase features.
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }

    // <-----> Get elements from database. <----->
    get(colletion, doc, callback = () => {}) {
        var docRef = this.db.collection(colletion).doc(doc);
        docRef.get().then(doc => {
            if (doc.exists) {
                callback(doc.data());
            } else {
                callback(null);
            }
        });
    }

    // <-----> Get docs from database collection. <----->
    getAllDoc(collection, callback = () => {}) {
        this.db.collection(collection).get().then((querySnapshot) => {
            var docArray = [];
            querySnapshot.forEach((doc) => {
                docArray.push({id: doc.id, data: doc.data()});
            });
            callback(docArray);
        });
    }

    // <-----> Add element to database collection with auto-id. <----->
    add(collection, data, callback = () => {}) {
        this.db.collection(collection).add(data)
        .then((docRef) => {
            callback(docRef.id);
        });
    }

    // <-----> Database query. Find values. <----->
    query(collection, queryVal1, condition, queryVal2, callback = () => {}) {
        this.db.collection(collection).where(queryVal1, condition, queryVal2)
            .get()
            .then((querySnapshot) => {
                var dataArray = [];
                querySnapshot.forEach((doc) => {
                    dataArray.push({id: doc.id, data: doc.data()});
                });
                callback(dataArray);
            });
    }

    // <-----> Set document values. This overwrite all values. <----->
    set(collection, doc, value, callback = () => {}) {
        this.db.collection(collection).doc(doc).set(value)
        .then(() => {callback(true);})
        .catch(() => {
            callback(false);
        });
    }
    
    // <-----> Update database collection. This changes only selected values. <----->
    update(collection, doc, value, callback = () => {}) {
        this.db.collection(collection).doc(doc).update(value)
        .then(callback(true))
        .catch(() => {
            callback(false);
        })
    }
}