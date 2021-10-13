function removeItemFromArray(array, item) {

    let arrayWithoutItem = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element != item) {
            arrayWithoutItem.push(element);
        }
    }

    return arrayWithoutItem;
}

// container yra tueri buti HTML elementas
function displayItems(array, container) {

    let innerItems = "";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        innerItems += "<div>" + element + "</div>";
    }

    container.innerHTML = innerItems;
}