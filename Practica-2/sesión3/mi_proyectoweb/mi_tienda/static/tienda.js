function CargarJsonLocal(params) {
    var request2 = new XMLHttpRequest();
    request2.open("GET", "products.json", false);
    request2.send()
    console.log(request2.responseType);
    var people2 = JSON.parse(request2.responseText);
    console.log(people2);
}
