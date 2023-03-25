

fetch("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR")
.then(response=> response.json())
.then(lista=>DataLista(lista));

function DataLista(lista){
console.log(lista);
let body="";
for (let i=0; i<lista.length;i++){

if (lista[i].bloqueado=== "N"){
body+=`<tr class="green">
    <td>${lista[i].id}</td>
    <td>${lista[i].usuario}</td>
    <td>${lista[i].bloqueado}</td>
    <td>${lista[i].apellido}</td>
    <td>${lista[i].nombre}</td>
    <td><button><img src="/imagen/like.png" width="50px" boton</button></td>
    <td><button><img src="/imagen/dislike.jfif" width="50px" boton</button></td>
</tr>`
}else{
body+=`<tr class="red">
    <td>${lista[i].id}</td>
    <td>${lista[i].usuario}</td>
    <td>${lista[i].bloqueado}</td>
    <td>${lista[i].apellido}</td>
    <td>${lista[i].nombre}</td>
    <td><button id = "desbloquear"><img src="/imagen/like.png" onclick="desbloquearUsuario()" width="50px" boton</button></td>
    <td><button id = "bloquear"><img src="/imagen/dislike.jfif" onclick="bloquearUsuario()" width="50px" boton</button></td>
</tr>`
}
document.getElementById('lista').innerHTML= body;

}
}

//--------------------------------------------------SEARCH-USER--------------------------------------------------------

const buscar = document.getElementById("buscar")
const buscarTxt = document.getElementById("query")

function buscarUsuario(){
    var txt = buscarTxt.value;
    console.log(txt);

    let search = new URLSearchParams([["usuario",txt]]);

    fetch("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&"+(search))
        .then(response=> response.json())
        .then(data=>DataLista(data));


}
buscar.addEventListener("click",buscarUsuario);

//---------------------------------------------------BLOCK-USER--------------------------------------------------------

function bloquearUsuario(bloquear) {
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${lista.id}&estado=Y`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            window.location = "../html/lista.html";
        })
        .catch(error => {
            console.error('Error al bloquear usuario:', error);
        });
}

//---------------------------------------------------UNBLOCK-USER------------------------------------------------------

function desbloquearUsuario(desbloquear) {
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${lista.id}&estado=N`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            window.location = "../html/lista.html";
        })
        .catch(error => {
            console.error('Error al desbloquear usuario:', error);
        });
}
