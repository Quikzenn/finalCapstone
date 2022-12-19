// selecting and storing in variable all our dom elements to be used in this js file for the contact page
const contactButton = document.getElementById('contactButton')
const commentButton = document.getElementById('commentButton')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const textarea = document.getElementById('textarea')
const commentBox = document.getElementById('comment')
const commentNameBox = document.getElementById('commentName')
// creating an eventlistener for the contact us form which will take the form values and relay the message back to the user
contactButton.addEventListener('click', () => {
    alert(`Thanks for the message ${firstName.value} ${lastName.value}! We'll be in touch regarding your message at ${email.value}.`)
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    textarea.value = "";
})
// event listeners for our two forms (contact us and leave a comment) which will hit submit if the user presses the enter key
textarea.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        contactButton.click();
    }
});

commentBox.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        commentButton.click();
    }
})
// declaring function displayComment
const displayComment = () => {
    // grabbing our comments array and the array of the names of commenters, parsing them and storing them in variables, if they don't yet exist, declare them as empty arrays;
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    let commentNames = JSON.parse(localStorage.getItem('commentNames')) || [];
    // grabbing the values of the comment box and comment name box and storing them in variables
    let comment = document.getElementById("comment").value;
    let commentName = document.getElementById('commentName').value;  
    // grabbing and storing in variable our empty div which will display the comments 
    let displayArea = document.getElementById("display-area");
    
    // When a user writes their name and comment and hits submit, we push the values into the two arrays newly declared or from storage, and then stringify and send them
    // back to storage
    comments.push(comment);
    commentNames.push(commentName);
    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('commentNames', JSON.stringify(commentNames));

    // resetting displayAreas content, so that comments dont multiply on each other everytime a new comment is submitted
    displayArea.innerHTML = "";
    // iterating through comments array which contains all the user comments thus far
    for (let i = 0; i < comments.length; i++) {
        // dont display an empty comment
        if (comments[i] !== "") {
            // for each valid comment create a span element
        let span = document.createElement('span');
            // the span elements content which says who wrote the comment, then displays their comment and has a like button beneath each one
            span.innerHTML = `<label for="commentValue">${commentNames[i]} says:</label><br>
            <textarea id="commentValue" cols="30" rows="10">${comments[i]}</textarea><br>
            <button class="like-button" onclick="myFunction(this)">Like</button><br><br>`;
            // then we add this to the empty div
            displayArea.appendChild(span);
        }
        
    }
    // each time a comment is submitting, reset the content of the comment name box and comment box 
    commentBox.value = "";
    commentNameBox.value = ""; 
    
}
// function to make button change to say liked when clicked
function myFunction(element) {
    element.innerHTML = "Liked!";
  }
  
// running the function so we can display previous comments when the page is run
displayComment();