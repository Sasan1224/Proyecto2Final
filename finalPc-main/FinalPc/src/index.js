import {
    initializeApp
} from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    onValue,
    update,
    push
} from 'firebase/database';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirebaseConfig
} from './firebase-config';
import {
    userCard
} from './user-card';

// Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

const logout_btn = document.getElementById("logout_btn");
const actu_btn = document.getElementById("actu_btn");
const userList2 = document.getElementById("userslist2");

function getUsuarios() {

    const db = getDatabase();
    const dbRef = ref(db, 'pp');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        // console.log("lista", data);
        actualizarLista(data);
    });

}
function gettiendas() {

    const db = getDatabase();
    const dbRef = ref(db, 'restau');
    onValue(dbRef, (snapshot) => {
        const menu = snapshot.val();
        // console.log("lista", data);
       actutitulo(menu);
       
    });

}


function logout(e, ev) {
    auth.signOut()
        .then(() => {
            window.location.href = "login.html";
           
        })
        .catch((error) => {
            console.log(error.message);
        });
}
logout_btn.addEventListener("click", logout);



function actualizarLista(info) {
    if (info) {
        userList2.innerHTML = "";

        Object.keys(info).forEach((k, index) => {

            console.log("Objeto", info[k])
            const card = new userCard(info[k])

            userList2.appendChild(card.render());
        });

    } else {
        userList2.innerHTML = "No hay usuarios registrados";
    }
}
function actutitulo(info) {
    if (info) {
        let pingas = "";
        Object.keys(info).forEach((k, index) => {

            console.log("Objeto", info[k])
            pingas = info[k].place
            
            heho.innerHTML = pingas
        });

    }
}


onAuthStateChanged(auth, (user_account)=>{
    if (user_account){

getUsuarios();
gettiendas();

}else{
window.location.href = "login.html";
}
});