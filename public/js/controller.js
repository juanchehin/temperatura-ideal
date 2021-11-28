// Cuando hago clic en btnCiudad se dispara la funcion nextItem
var btn = document.getElementById('btnCiudad');
btn.addEventListener('click', buscarTemperatura)

var texto = document.getElementById('txtCiudad');


function buscarTemperatura() {
    texto = texto.value;

    var url = `/buscar-temperatura/${texto}`;
    request(url)

}

function request(url) {
    // **** Fetch ******
    fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        mostrarCartelExito(data.respuesta);
    }).catch(error => {

        mostrarCartelError();
    })
}

function mostrarCartelExito(temp) {
    Swal.fire(
        'Aire acondicionado',
        '<h2>Configura tu aire a </h2><h1>' + temp + '°C</h1>',
        'info'
    )
}

function mostrarCartelError() {
    Swal.fire(
        'Aire acondicionado',
        '<h1>Ocurrio un error </h1>',
        'error'
    )
}

texto.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btnCiudad").click();
    }
});