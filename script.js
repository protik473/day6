const paragraph = document.querySelector("p");
const button = document.querySelector("button");
const box = document.querySelector("div");

paragraph.textContent = "This text is updated using JavaScript DOM.";

box.style.backgroundColor = "lightblue";
box.style.padding = "15px";
box.style.marginTop = "10px";

button.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added after button click.";
    box.appendChild(newParagraph);
});
