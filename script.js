const container = document.querySelector('.container');
const imagesWrapper = document.querySelector('.images');
let images = document.querySelectorAll('.image');

const firstNode = images[0].cloneNode(true);
const lastNode = images[images.length - 1].cloneNode(true);

firstNode.id = 'first';
lastNode.id = 'last';

imagesWrapper.append(firstNode); // Appending the first image to the end
imagesWrapper.prepend(lastNode); // Prepending the last image to the start

let index = 1;

let imgWidth = images[index].clientWidth; // Get the width of the image at second position since that is the first image in our list post prepending
imagesWrapper.style.transform = `translateX(${-imgWidth * index}px)`; // Shifting by negative to show the first image and not the last prepended node

function startSliding() {
	setInterval(() => {
		index++; // After every 3 seconds, the image counter will increase
		imagesWrapper.style.transform = `translateX(${-imgWidth * index}px)`;
		imagesWrapper.style.transition = '.7s'; // Adding smooth transition effect
	}, 3000);
}

// Reseting the value of index with event and callback function after every transition end
imagesWrapper.addEventListener('transitionend', () => {
	images = document.querySelectorAll('.image'); // Getting new set of images post appending and prepending

	if (images[index].id === firstNode.id) {
		imagesWrapper.style.transition = 'none';
		index = 1;
		imagesWrapper.style.transform = `translateX(${-imgWidth * index}px)`; 
	}
});

// Getting new width of the image on resizing of window
window.onresize = () => {
	imgWidth = images[index].clientWidth;
	imagesWrapper.style.transform = `translateX(${-imgWidth * index}px)`;
}

window.onload = () => {
	startSliding();
};