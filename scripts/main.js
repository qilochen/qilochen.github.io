// Image switcher code
let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/poker.png') {
        myImage.setAttribute('src', 'images/poker2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/poker.png');
    }
}

// User name switcher code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Consistency is the KEY, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Consistency is the KEY, ' + myName;
}

myButton.onclick = () => {
    setUserName();
}