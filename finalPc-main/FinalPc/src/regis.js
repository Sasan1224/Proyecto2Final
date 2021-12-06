// Importar paquetes
// Configuracion de firebase
import {
    getFirebaseConfig
} from './firebase-config.js';

// Modulos de firebase a utilizar
import {
    initializeApp
} from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    push
} from 'firebase/database';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

// Inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();
const auth = getAuth();

// Elementos de la página
const email = document.getElementById("email");
const password = document.getElementById("password");
const propiet = document.getElementById("propietario");
const place = document.getElementById("userrestaurant");
const nrd = 0;

const signup_btn = document.getElementById("signup_btn");

// Agregar eventos
function regis(e, ev) {
    // Crear la cuenta del usuario
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((user_credential) => {
            console.log(user_credential);


        })
        .catch((error) => {
            console.log(error.message);
        });
}

function registrarREST(user) {
    // Obtener la base datos
    const db = getDatabase();
    const newUserRef = push(ref(db, 'restau'));
    //console.log(newUserRef);

    // injectar el id
    user["id"] = newUserRef.key
    // escribir un nuevo usuario
    set(newUserRef, user);
}

const regisREST = (e, event) => {
    // console.log("ejecutó evento")
    const local = {
        email: email.value,
        propietario: propiet.value,
        place: place.value,
        nrd: nrd
    }
    registrarREST(local)
}

    signup_btn.addEventListener("click", regisREST)
    

    signup_btn.addEventListener("click", regis)
  

onAuthStateChanged(auth, (user_account) => {
    if (user_account) {
        // Hay usuario loguegado
        console.log("account", user_account);
        window.location.href = "index.html"
    }
});