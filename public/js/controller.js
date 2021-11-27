const result = dotenv.config()

// Cuando hago clic en btnCiudad se dispara la funcion nextItem
var btn = document.getElementById('btnCiudad');
btn.addEventListener('click', buscarTemperatura)


function buscarTemperatura() {
    btn.style.display = 'none'
    var url = 'http://api.openweathermap.org/data/2.5/weather';
    var urlHarcodeado = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c53be32b7bfe4bdf45b05c02e8e5a5ab';

    requestAJAX(urlHarcodeado, function(data) {

        console.log("la data devuelta es : ", data);

    })

}