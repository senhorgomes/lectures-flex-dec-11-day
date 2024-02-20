// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api

// document.addEventListener('DOMContentLoaded', () => {
//     const searchButton = document.querySelector("button");
//     searchButton.addEventListener("click", () => {
//         searchButton.disabled = true;
//         fetch('https://api.tvmaze.com/search/shows?q=breaking%20bad')
//             .then((response) => response.json())
//             .then((data) => {

//                 const list = document.querySelector('ul');
//                 for(const result of data){
//                     const liElement = document.createElement("li");
//                     const textNode = document.createTextNode(result.show.name);
//                     liElement.append(textNode);
//                     list.append(liElement)
//                 }
//             })
//     })

// })

$(document).ready(()=>{
    // const searchButton = document.querySelector("button");
    const searchButton = $("button");
    // searchButton.click(()=>{
    //     console.log("hello")
    // })
    searchButton.on("click", ()=> {
        searchButton.attr("disabled", true);
        // ajax
        // jQuery ajax defaults to a get request
        $.get('https://api.tvmaze.com/search/shows?q=breaking%20bad')
        .then((data)=> {
            // searching
            const list = $("ul");
            for(const result of data){
                // creating an element
                const liElement = $(`<li>${result.show.name}</li>`);
                // liElement.text(result.show.name);
                list.append(liElement);
            }
        })
        // $.ajax({
        //     url:'https://api.tvmaze.com/search/shows?q=breaking%20bad', 
        //     success:(data)=> console.log(data),
                //method: 'POST'
        // })
        // Ajax already converts the information for us to handle
        // $.ajax('https://api.tvmaze.com/search/shows?q=breaking%20bad')
        // // Ajax already converts the information for us to handle
        // .then((data)=> console.log(data))

    })
    //     searchButton.addEventListener("click", () => {
//         searchButton.disabled = true;
//         fetch('https://api.tvmaze.com/search/shows?q=breaking%20bad')
//             .then((response) => response.json())
//             .then((data) => {

//                 const list = document.querySelector('ul');
//                 for(const result of data){
//                     const liElement = document.createElement("li");
//                     const textNode = document.createTextNode(result.show.name);
//                     liElement.append(textNode);
//                     list.append(liElement)
//                 }
//             })
//     })
})