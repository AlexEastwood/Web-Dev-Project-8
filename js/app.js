function fetchData(url) {
    return fetch(url)
            .then(response => response.json())
}

fetchData('https://randomuser.me/api/?results=3') 
    .then(data => createCard(data.results))


function createCard(data) {
    body = document.getElementById("images");
    data.forEach(e => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = e.name.first;
        body.appendChild(card)
    })
    
}



function imageLinks(data) {
    data.forEach(element => {
        let img = document.createElement("img");
        img.src = element.picture.large;
        let div = document.getElementById("images");
        div.appendChild(img);
    });
}


