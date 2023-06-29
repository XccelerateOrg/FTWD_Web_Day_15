const li = document.querySelectorAll("li a");

document.querySelector("#submitButton").addEventListener("click", (e) => {
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "red";
  }
  document.getElementById("changeMe").style.color = "blue";
});

const hoverOrange = document.getElementsByClassName("hoverOrange");

Array.from(hoverOrange).forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    e.target.style.color = "orange";
  });

  element.addEventListener("mouseleave", (e) => {
    e.target.style.color = "";
  });
});
