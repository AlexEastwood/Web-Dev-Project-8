let employees =[]
let main = document.getElementById("main")
let lightbox = document.getElementById("lightbox")
let background = document.getElementById("lightbox-background")

/////////////////////
// Fetch Functions //
/////////////////////

function fetchData(url) {
    return fetch(url)
            .then(response => response.json())
}

fetchData('https://randomuser.me/api/?results=12') 
    .then(data => createCard(data.results))

// Function for creating card for each employee
function createCard(data) {
    employees = data
    
    employees.forEach(employee => {
        //Split the employee object data into variables
        let [image, firstName, lastName, email, 
            phone, street, number, city, state, postcode, 
            birthday] = [employee.picture.large, employee.name.first, 
                employee.name.last, employee.email, employee.phone, 
                employee.location.street.name, employee.location.street.number, 
                employee.location.city, employee.location.state, employee.location.postcode, 
                employee.dob.date.split("T")[0]]

        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.innerHTML = `
            <img src="${image}">
            <div class="info">
                <span class="name">${firstName} ${lastName}</span>
                <span>${email}</span>
                <span>${city}</span>
            </div>
            <div class="extra-info">
                <span>${phone}</span>
                <span>${number} ${street}, ${state} ${postcode}</span>
                <span>Birthday: ${birthday}</span>
            </div>`
        cardDiv.addEventListener("click", openOverlay)
        
        main.appendChild(cardDiv)
    })
}

function openOverlay() {
    lightbox.innerHTML = this.innerHTML
    lightbox.style.display = "flex"
    background.style.display = "block"
    background.addEventListener("click", closeOverlay)
}

function closeOverlay() {
    lightbox.style.display = "none"
    background.style.display = "none"
}