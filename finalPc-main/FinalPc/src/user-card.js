import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    update,
    child
} from 'firebase/database';

export class userCard {
    constructor(user) {
        this.user = user;
    }

    render() {
        let card = document.createElement("div");
        card.className = "user-card";

        let title = document.createElement("h3");
        title.className = "user-card-title";
        title.innerHTML = this.user.nombre;

        let numer = document.createElement("num");
        numer.className = "numero";
        numer.innerHTML = this.user.restaurant

        let masBtn = document.createElement("button");
        masBtn.className = "user-card-plus";
        masBtn.innerHTML = "Cancelar Espacio";
        masBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            set(userRef, null);

        });

    

        card.appendChild(title);
        card.appendChild(numer);
        card.appendChild(masBtn);
        return card;
    }


}