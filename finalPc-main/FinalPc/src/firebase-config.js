const firebaseConfig = {
    apiKey: "AIzaSyBJYWbMm-6zmB6g0JZHEQMHjM9o8OwA3hw",
    authDomain: "final-bb45a.firebaseapp.com",
    databaseURL: "https://final-bb45a-default-rtdb.firebaseio.com",
    projectId: "final-bb45a",
    storageBucket: "final-bb45a.appspot.com",
    messagingSenderId: "947158784627",
    appId: "1:947158784627:web:34799652f2ca192aeb2806",
    measurementId: "G-WM6M9047QM"
  };
export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
