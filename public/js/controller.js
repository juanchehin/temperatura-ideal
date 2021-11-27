// const result = dotenv.config()

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

function requestAJAX(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }
    xhr.open('POST', url, true)
    xhr.send();
}