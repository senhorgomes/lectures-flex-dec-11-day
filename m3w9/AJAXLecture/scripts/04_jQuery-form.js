$(document).ready(()=>{
    // We want to listen to the form submission
    const form = $("form");
    // Anytime a form submits, the page will get redirected
    form.on("submit", (event)=> {
        // we have to prevent default events from happening
        event.preventDefault();
        // Capture the search term
        const searchTerm = $("#searchTerm").val()
        // searchButton.attr("disabled", true);
        // ajax
        // jQuery ajax defaults to a get request
        // $.get('https://api.tvmaze.com/search/shows?q=breaking%20bad')
        $.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then((data)=> {

            
            // searching
            const list = $("ul");
            //empty the ul here?
            list.empty();
            for(const result of data){
                // creating an element
                const liElement = $(`<li>${result.show.name}</li>`);
                // liElement.text(result.show.name);
                list.append(liElement);
            }
        })
    })
})