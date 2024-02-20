// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

document.addEventListener('DOMContentLoaded', () => {
    // Everytime I click on the button on the page, I want this fetch request and console log to be called

    const searchButton = document.querySelector("button");

    // Could we trigger an event? Let say everytime we click on the button a console.log gets outputed
    // console.log(searchButton)

    searchButton.addEventListener("click", () => {
        searchButton.disabled = true;
        fetch('https://api.tvmaze.com/search/shows?q=breaking%20bad')
            // Before we can console log or access the response, we need to convert the JSON
            .then((response) => response.json())
            // The data returned from the .json will be access in this new .then
            .then((data) => {
                // We want this information to be populated in our page
                // Find the ul
                const list = document.querySelector('ul');
                // Loop through the results
                for(const result of data){
                    // For each result create a list element and append it to our ul element
                    const liElement = document.createElement("li");
                    // create a text node
                    const textNode = document.createTextNode(result.show.name);
                    // append the text node to the li element
                    liElement.append(textNode);
                    // join the li to the ul element
                    list.append(liElement)
                    // console.log(result.show.name)
                }
            })
    })
    // I want to be able to target the button on the page
    // we need to query the button in the document itself
})
