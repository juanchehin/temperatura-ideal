// Cuando hago clic en btnCiudad se dispara la funcion nextItem
var btn = document.getElementById('btnCiudad');
btn.addEventListener('click', buscarTemperatura)

var texto = document.getElementById('txtCiudad');


function buscarTemperatura() {
    console.log("pasa buscarTemperatura");

    console.log("texto es : ", texto.value);
    texto = texto.value;

    // btn.style.display = 'none'
    // var url = `/buscar-temperatura/` + texto;
    var url = `/buscar-temperatura/${texto}`;

    console.log("url es : ", url);
    requestAJAX(url)

}

function requestAJAX(url) {
    /*var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
    xhr.open('POST', url, true)
    xhr.send();
    */

    // **** Fetch ******
    fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(function(response) {
        console.log('response 2 es : ', response)
        return response.json()
    }).then(function(data) {
        console.log('La temperatura es es : ', data)
        mostrarCartel(data.respuesta);
    }).catch(error => console.log('error es : ', error))
}

// Muestra un cartel de error en caso de que
// la ciudad ingresada no exist
function mostrarCartel(temp) {
    console.log('entra mostrarCartel', temp);

    Swal.fire(
        'Aire acondicionado',
        '<h1>Configura tu aire a </h1>' + temp,
        'info'
    )
}