function getItems() {
    let item1 = {
        image: "picture.jpg",
        decription: "aaaaaaa",
        price: 1000,
        currency: "EUR"
    }

    let item2 = {
        image: "https://picsum.photos/482/273?random=1",
        decription: "cccccc",
        price: 999,
        currency: "EUR"
    }

    let item3 = {
        image: "https://picsum.photos/481/273?random=2",
        decription: "eeeeeee",
        price: 999,
        currency: "EUR"
    }

    return [item1, item2, item3];
}

function displayItems(items, container){

    let allItems = "";
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        let template = '<div class="child"> <div class="content"> <img src="{{image}}" alt=""> <p>{{decription}}</p><p>kaina: {{price}} {{currency}}</p></div></div>'

        template = template.replace("{{image}}", item.image);
        template = template.replace("{{decription}}", item.decription);
        template = template.replace("{{price}}", item.price);
        template = template.replace("{{currency}}", item.currency);

        allItems += template;
    }

    container.innerHTML = allItems;
}