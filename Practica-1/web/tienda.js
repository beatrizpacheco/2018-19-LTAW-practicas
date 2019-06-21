function CargarJsonLocal(params) {
    var request = new XMLHttpRequest();
    request.open("GET", "products.json", false);
    request.send()
    console.log(request.responseType);
    var jdt = JSON.parse(request.responseText);
    console.log(jdt);
}
