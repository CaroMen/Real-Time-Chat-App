import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQtNw7WzBP4OHsjRQPrA3dcO4qvphBuNQ",
    authDomain: "ninja-chat-cf43f.firebaseapp.com",
    databaseURL: "https://ninja-chat-cf43f.firebaseio.com",
    projectId: "ninja-chat-cf43f",
    storageBucket: "ninja-chat-cf43f.appspot.com",
    messagingSenderId: "131036116766",
    appId: "1:131036116766:web:6e8e42ba6effee2fe07b0f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()