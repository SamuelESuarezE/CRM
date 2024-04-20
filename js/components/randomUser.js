export const createRandomUsers = async() => {
    let datosUsuarios = []
    for (let index = 0; index < 50; index++) {
        let connection = await fetch("https://randomuser.me/api")
        let data = await connection.json()
        let dataUser = {
            "name": data.results[0].name.first + " " + data.results[0].name.last,
            "username": data.results[0].login.username,
            "email": data.results[0].email,
            "phone": data.results[0].cell,
            "img": data.results[0].picture.large
        }
        datosUsuarios.push(dataUser)
    }
    return datosUsuarios
}