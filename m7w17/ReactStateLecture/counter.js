$(() => {
    console.log('ready');
    // Event listener, listening to the button for a click event
    $('#likes-btn').on('click', ()=> {
        console.log('pressed');
        // Target the h4 with the count, and increment the inner text up by one
        const previousNumber = Number($('#likes-count').text())
        $('#likes-count').text(previousNumber + 1)
    })

})