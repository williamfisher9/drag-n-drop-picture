const box1 = document.querySelector(".box1");
const boxes = document.querySelectorAll(".box");

window.addEventListener("load", () => {
  box1.innerHTML = "<img src='./assets/1.jpg' alt='image' id='img1'/>";
})

boxes.forEach((box) => {
  box.addEventListener("dragstart", (event) => {
    event.target.style.opacity = 0.5;
    event.dataTransfer.setData("text", event.target.id);
  },);

  box.addEventListener("dragend", (event) => {
    event.target.style.opacity = 1;
    box.style.border = "1px solid black";
  });

  box.addEventListener("dragover", (event) => {
    event.preventDefault();
    box.style.border = "2px dashed red";
  });

  box.addEventListener("dragleave", () => {
    box.style.border = "1px solid black";
  });

  box.addEventListener("drop", (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  });
});
