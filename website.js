// declaring function displaySaved with argument imgPath, which is used on every save item for later button on the site
const displaySaved = (imgPath) => {
    // pulls array out of localStorage or creates new array if none exists
    let images = JSON.parse(localStorage.getItem('image')) || [];
    // pushes the imgPath argument into the array
    images.push(imgPath);
    // stringifys the array and sends it back to storage
    localStorage.setItem('image', JSON.stringify(images));
    // checks the number of items in the array to alert the user of the number of saved items
    alert(`You have ${images.length} item(s) in your Save for Later folder`);
}
// function to make like button say liked when clicked
function myFunction(element) {
    element.innerHTML = "Liked!";
  }
  




