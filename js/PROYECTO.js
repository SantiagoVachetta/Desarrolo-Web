let visitas =+ localStorage.getItem("visitas") || 0;

let miUsuario = document.querySelector(".usuario");
const usuario = document.getElementById("TITLE");

let login = ""


usuario.addEventListener("click", identificarUsuario);

function identificarUsuario() {

    let nombre = prompt("Ingrese su nombre para identificarse");
    let usuarionuevo = nombre
    if (usuarionuevo) {
        localStorage.setItem("nombre", usuarionuevo)


    }


}


function obtenerUsuario() {
    let usuariologin = localStorage.getItem("nombre")
    miUsuario.innerHTML = `${usuariologin}`

}
obtenerUsuario()


















function contador() {
visitas = visitas + 1
if(visitas){
localStorage.setItem("visitas", visitas)
}


}

contador()

