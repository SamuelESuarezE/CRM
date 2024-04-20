import { createRandomUsers } from "./components/randomUser.js";
const containerUsers = document.querySelector(".containerUsers");
let datosUsuarios = await createRandomUsers()

function loadUsers() {
    let usersHTML = "";
    for (let usuario of datosUsuarios) {
        usersHTML += `<div class="cardUser">
            <img src="${usuario.img}" alt="">
            <p class="userName">${usuario.name}</p>
            <div class="id">
                <i class="bi bi-person-circle"></i>
                <p>${usuario.username}</p>
            </div>
            <p class="email">${usuario.email}</p>
            <div class="phone">
                <i class="bi bi-phone"></i>
                <p>${usuario.phone}</p>
        </div>
        </div>
        `
    }


    containerUsers.innerHTML = usersHTML;
}

loadUsers()