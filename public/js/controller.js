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
    console.log('entra mostrarCartel', temp);

    Swal.fire(
        'Aire acondicionado',
        '<h1>Configura tu aire a </h1>' + temp,
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