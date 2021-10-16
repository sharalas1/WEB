function getCars() {
    // keliam ne i duoimenu baze o i servisa
    return fetch("http://sharalas1-001-site1.itempurl.com/Cars/list").then(response => response.json())
}

function createCar(car) {
    return fetch("http://sharalas1-001-site1.itempurl.com/Cars",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(car)
        }
    ).then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            alert("Yra bedu");
        }
    })
}