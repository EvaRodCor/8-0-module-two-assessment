//used forEach to loop through films to find film title using API

const selector = document.querySelector("#film-selection")
fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => response.json())
.then((obj) => {
    obj.forEach((film) => {
        const option = document.createElement("option");
        option.value = film.title
        option.textContent = film.title;
        selector.append(option);
    });


//setting up display that contains description and release year    
//was adding to HTML but for some reason it wasn't working for me to decided to create it in the DOM using .innerHTML  

selector.addEventListener("change", (event) => {
event.preventDefault()
const filmInfo = document.querySelector("#display-info")
//creating loop again to get description and released year            
    obj.forEach ((film) => {
    if (film.title === event.target.value) {
        filmInfo.innerHTML = `
        <h3>${film.title}</h3>
        <p>${film.release_date}</p>
        <p>${film.description}</p>`
            }    
        });
    });

//creates a list of reviews, should log movie title and user input
document.querySelector("form").addEventListener("submit", (event) => {
event.preventDefault();
const ul = document.querySelector("ul")
        const li = document.createElement("li")
        li.innerHTML = 
        `<strong><b>${selector.value}</b></strong>: ${event.target.review.value}` 
        ul.append(li)
        event.target.reset();
        });
    });

    