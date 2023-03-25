


function loguear() {

    let usuario=document.getElementById("usuario").value;
    let password=document.getElementById("password").value;

    if (usuario=="mjmartinez"&& password=="1234") {
        fetch(`http://168.194.207.98:8081/tp/login.php?user=${usuario}&pass=${password}`)
            .then(response => {
                    window.location = "../html/lista.html";
            })
            .catch(error => console.error(error));
    }else{
        fetch(`http://168.194.207.98:8081/tp/login.php?user=${usuario}&pass=${password}`)
            .then(response => {
                    alert("Usuario o password incorecto/s");
            })
            .catch(error => console.error(error));
    }
}
//-----------------------------------------------------------------------------------------------------------------------

