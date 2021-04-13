/**********************************************
 * Add an event listener to input
 * ==================================
 ***********************************************/

console.log("This loads");

// Grab all inputs
const inputs = document.querySelectorAll("input");
// Grab the tag with message id
const message = document.querySelector("#message");
// console log the inputs
console.log(inputs);

/**********************************************
 * Keyboard Events
 * ==================================
 * Keydown -> includes control, shift and option (alt)
 * Keypress -> just the letters
 ***********************************************/
inputs.forEach((event) => {
  // Add an event listener
  event.addEventListener("keydown", (event) => {
    // Console.log the key
    const keyName = event.key;
    // You can also print out the key that the user pressed down (you can maybe even associate this key with an event on your canvas project!)
    console.log(`keydown event: ${keyName}`);
    // Grab the element with the id message
    message.textContent += keyName;
  });
  event.addEventListener("keyup", (event) => {
    // When someone lets go of that key
    const keyName = event.key;
    // Console log that event
    console.log(`keyup ${keyName}`);
  });
  event.addEventListener("keypress", (event) => {
    const keyName = event.key;
    console.log(`keypress event: ${keyName}`);
  });
});

/**********************************************
 * To do list
 * ==================================
 ***********************************************/
// main tag
const main = document.querySelector(".main");
// create unordered list
const ul = document.createElement("ul");
// create input
const toDoInput = document.createElement("input");
// create button
const button = document.createElement("button");

// add text content to button
button.textContent = "Add Item";
button.classList.add("btn");
button.classList.add("button");
toDoInput.classList.add("form-control");
// add button to the main div
main.prepend(button);
// add toDoInput to main div
main.prepend(toDoInput);
// add unordered list to main div
main.append(ul);

/**********************************************
 * Mouse Events
 * ==================================
 ***********************************************/
// when someone mouse overs the button, change the color background
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#DCD3FF";
});
// when someone leaves the div, change the background color (to indicate that the has been hovered on before)
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#BFFCC6";
});
/**********************************************
 * Input Events
 * ==================================
 ***********************************************/
// when someone clicks on the input, focus the input
toDoInput.addEventListener("focus", (e) => {
  toDoInput.style.backgroundColor = "#AFCBFF";
  toDoInput.style.color = "white";
});
// when someone unclicks the input, change background color
toDoInput.addEventListener("blur", (e) => {
  toDoInput.style.backgroundColor = "#FFFFD1";
  toDoInput.style.color = "black";
});
/**********************************************
 * List
 * ==================================
 ***********************************************/
function createItem(toDoItem) {
  console.log(toDoItem);
  // create new element
  let newListItem = document.createElement("li");
  // apply new item to text content
  newListItem.textContent = toDoItem;
  // adjust font size
  newListItem.style.fontSize = "1.5em";
  // create new span
  let newSpan = document.createElement("span");
  // make the text content to equal x
  newSpan.textContent = " x ";
  // apply styling
  newSpan.style.color = "darkred";
  // when someone clicks on the x
  newSpan.addEventListener("click", (event) => {
    // remove that item
    newListItem.remove();
  });
  // adjust the cursor styling
  newSpan.addEventListener("mouseover", (e) => {
    newSpan.style.cursor = "grab";
  });
  // your cursor could also be pointer
  newSpan.addEventListener("mouseout", (e) => {
    newSpan.style.cursor = "pointer";
  });
  // add the new span to the item
  newListItem.append(newSpan);
  // append that item to the unordered list
  ul.append(newListItem);
}
// array of stuff
const toDoList = ["plan well", "code well", "chill well"];
// for each item, create item
toDoList.forEach((element, index) => {
  createItem(toDoList[index]);
});
// add event listener
button.addEventListener("click", (event) => {
  console.log(toDoInput.value);
  createItem(toDoInput.value);
  // make sure to empty that value
  toDoInput.value = "";
});
