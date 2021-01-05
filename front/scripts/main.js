let icon = document.querySelector('img');


let button = document.querySelector('button');
let head = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字:');
    if (!myName || myName === null) {
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        head.textContent = 'Mozilla 酷毙了, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    head.textContent = 'Mozilla 酷毙了, ' + storedName;
}

button.onclick = function() {
    setUserName();
}

icon.onclick = function() {
    let src = icon.getAttribute('src');
    if (src === 'images/firefox-icon.png') {
        icon.setAttribute('src', 'images/google-icon.png');
    } else {
        icon.setAttribute('src', 'images/firefox-icon.png');
    }
}