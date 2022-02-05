const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//img 생성
const bgImage = document.createElement("img");

//<img src = ~ >
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
