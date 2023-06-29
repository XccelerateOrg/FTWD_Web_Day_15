/**********************************************
 * Add an event listener to input
 * ==================================
 ***********************************************/

/**********************************************
 * Keyboard Events
 * ==================================
 * Keydown -> includes control, shift and option (alt)
 * Keypress -> just the letters
 ***********************************************/

/**********************************************
 * To do list
 * ==================================
 ***********************************************/
/**********************************************
 * Mouse Events
 * ==================================
 ***********************************************/
/**********************************************
 * Input Events
 * ==================================
 ***********************************************/
/**********************************************
 * List
 * ==================================
 ***********************************************/

const addItem = document.forms['add-item'];

addItem.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = addItem.querySelector('input[type="text"]').value;

    const ul = document.querySelector("#todo");
    const list = document.createElement("li");
    const itemName = document.createElement("span");
    const deleteButton = document.createElement("span");

    deleteButton.textContent = 'X';
    itemName.textContent = newItem;

    itemName.classList.add('name');
    deleteButton.classList.add('delete');

    ul.appendChild(list);
    list.appendChild(itemName);
    list.appendChild(deleteButton);

    addItem.querySelector('input[type="text"]').value = "";

    deleteButton.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })

    deleteButton.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "";
    });

})

const toDo = document.querySelector("#todo")

toDo.addEventListener("click", (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        toDo.removeChild(li);
    }
})

// let deleteBtns = document.querySelectorAll(".delete");

// deleteBtns.forEach((button) => {
//     button.addEventListener("mouseover", (e) => {
//         e.target.style.backgroundColor = "green";
//     })
// })