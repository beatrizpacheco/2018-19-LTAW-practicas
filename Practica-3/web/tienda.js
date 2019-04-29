function CargarJsonLocal(params) {
    var request2 = new XMLHttpRequest();
    request2.open("GET", "products.json", false);
    request2.send()
    console.log(request2.responseType);
    var people2 = JSON.parse(request2.responseText);
    console.log(people2);
}

function finder() {
    var dataList = document.getElementById("productos");
    var input = document.getElementById("productos");
    var results = CargarJsonLocal("assets/products.json")
    var filtered_array = [];
    
    for (const result in results) {
        results[result].forEach(element => {
            filtered_array.push(element.name)
            // Create a new <option> element.
            var option = document.createElement('option');
            option.value = element.name;
            dataList.appendChild(option);
        });
    }
    console.log(filtered_array);
}
