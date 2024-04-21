export const createRandomUsers = async() => {
    let datosUsuarios = []
    let connection = await fetch("https://randomuser.me/api/?results=100&noinfo")
    let data = await connection.json()
    

    for (let usuario of data.results) {
        let dataUser = {
            "name": usuario.name.first + " " + usuario.name.last,
            "username": usuario.login.username,
            "email": usuario.email,
            "phone": usuario.cell,
            "img": usuario.picture.large
        }
        datosUsuarios.push(dataUser)
    }

    return datosUsuarios
}