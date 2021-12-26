const image = [
    "0.jpg",
    "1.jpg",
    "2.jpg",

];

const chosenImage = image[Math.floor(Math.random() * image.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;




