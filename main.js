import "./style.css"

let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/testimage.jpg") {
    myImage.setAttribute("src", "images/image1.jpg");
  } else {
    myImage.setAttribute("src", "images/testimage.jpg");
  }
}

// welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Blackjack is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = `Blackjack is cool, ${storedName}`;
}

myButton.onclick = function() {
  setUserName();
}

const arr = [1, 2, 3, 4, 5];
for (const n of arr) {
  console.log(n);
}
