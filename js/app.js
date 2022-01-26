/////////////////////
// Fetch Functions //
/////////////////////

function fetchData(url) {
    return fetch(url)
            .then(response => response.json())
}

fetchData('https://randomuser.me/api/?results=12') 
    .then(data => createCard(data.results))


/////////////////////////////////////
// Information Retrieval Functions //
/////////////////////////////////////

function getImage(data) {
    img = document.createElement("img");
    img.src = `${data.picture.large}`;
    return img;
}

function getName(data) {
    span = document.createElement("span");
    span.classList.add("name")
    span.innerText = `${data.name.first} ${data.name.last}`;
    return span
}

function getEmail(data) {
    span = document.createElement("span");
    span.innerText = `${data.email}`;
    return span;
}

function getLocation(data) {
    span = document.createElement("span");
    span.innerText = `${data.location.city}`;
    return span;
}


// Function for creating card for each employee
function createCard(data) {
    main = document.getElementById("main");
    data.forEach(e => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let info = document.createElement("div");
        info.classList.add("info") 
        card.appendChild(getImage(e));
        info.appendChild(getName(e));
        info.appendChild(getEmail(e));
        info.appendChild(getLocation(e));

        card.appendChild(info);
        card.addEventListener("click", () => console.log("hello"));

        main.appendChild(card);
    })
    
}



      