function displayCars(cars, element) {

    let allItems = "";
    for (let index = 0; index < cars.length; index++) {
        const car = cars[index];

        let template = '<div class="col m3 s12"> <div class="card"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="{{photo}}"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">{{name}} <i class="material-icons right">more_vert</i></span> <p><a href="#">This is a link</a></p></div><div class="card-reveal"> <span class="card-title grey-text text-darken-4">{{name}}<i class="material-icons right">close</i></span> <p>Dokumentas: {{documentId}} <br> Kaina:{{price}} euru <br>{{carDate}} metu</p></div></div></div>';
console.log(car.photo);
        template = template.replaceAll("{{name}}", car.name);
        template = template.replaceAll("{{price}}", car.price);
        template = template.replaceAll("{{documentId}}", car.documentId);
        template = template.replaceAll("{{photo}}", car.photo);
        template = template.replaceAll("{{carDate}}", car.carDate);
        // cia rasom ka atspausdins is backendo ekrane

        allItems += template;
    }

    element.innerHTML = allItems;
}