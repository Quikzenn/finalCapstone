// grabbing and storing our empty div element into variable
const div = document.getElementById('div');

// declaring function displaySaved  
const displaySaved = () => {
    // pulling our saved items array out of localStorage and storing in variable imageURL
    const imageURL = JSON.parse(localStorage.getItem('image'));
    // iterating through all items in the array and for each one creating a span element which contains an img tag whose source is each url in the array
    for (let i = 0; i < imageURL.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = '<img class="localImage" src=' + imageURL[i] + '>';
        // then we add these span elements to the empty div
        div.appendChild(span);
    }
}



