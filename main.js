const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/paradela.jpg") {
        myImage.setAttribute("src", "images/descarga.jpeg");
    } else {
        myImage.setAttribute("src", "images/paradela.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "Terrible gordo sos, " + myName;
    }
};

if(!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Terrible gordo sos, ${storedName}`;
};

myButton.onclick = function() {
    setUserName();
  }
  