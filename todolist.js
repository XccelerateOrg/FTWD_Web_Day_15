/**********************************************
 * Add an event listener to input
 * ==================================
 ***********************************************/

const input = document.querySelector(".form-control");
const listEl = document.getElementById("list");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputText = input.value.trim();
    if (inputText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `<span style="cursor: pointer;">X</span> ${inputText}`;
      listEl.appendChild(li);

      //add li element to storage
      localStorage.setItem("listEl", listEl.innerHTML);
      inputText.value = "";
    }
  }
});

const deleteEl = document.querySelector("span");
//when click on the span delet list element
listEl.addEventListener("click", function (event) {
  if (event.target.matches("span")) {
    event.target.closest("li").remove();
    //update storage after deletion
    localStorage.setItem("listEl", listEl.innerHTML);
  }
});

window.addEventListener("load", function () {
  const storedListData = localStorage.getItem("listEl");
  if (storedListData) {
    listEl.innerHTML = storedListData;
  }
});

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
