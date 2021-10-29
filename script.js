let menuBarToggleBtn = document.querySelector('.menu-bar-toggle-btn');

let menuBarClosePad = document.querySelector('.menu-bar-close-pad');

let menuBar = document.querySelector('.menu-bar')
menuBarToggleBtn.addEventListener('click', toggleMenuBar);

let peopleBtn = document.getElementById('people-btn');
let searchBtn = document.getElementById('search-btn');
let favoritesBtn = document.getElementById('favorites-btn');
let catButtons = document.querySelectorAll('.category-btn');
let catShifter = document.querySelector('.cat-shifter');
let peopleArea = document.getElementById('people');
let searchArea = document.getElementById('search');
let favoritesArea = document.getElementById('favorites');

let opened = false;

function toggleMenuBar () {
	if(opened === false) {
		menuBar.style.right = 0+"px";
		// menuBarClosePad.style.display = "block";
		opened = true;
		// return opened;
	} else if (opened === true) {
		menuBar.style.right = -400+"px";
		// menuBarClosePad.style.display = "none";
		opened = false;
	}
	// return opened;
}
toggleMenuBar();

menuBarClosePad.onclick = toggleMenuBar();
peopleBtn.onclick = function () {
	catShifter.style.left = 0+"px";
	// console.log('Done');
	randomGlass();
	for(let i=0; i < catButtons.length; i++) {
		catButtons[i].classList.remove('focused');
	}
	peopleBtn.classList.add('focused');

}
searchBtn.onclick = function () {
	catShifter.style.left = -400+"px";
	// console.log('Done');
	randomGlass();
	for(let i=0; i < catButtons.length; i++) {
		catButtons[i].classList.remove('focused');
	}
	searchBtn.classList.add('focused');
}
favoritesBtn.onclick = function () {
	catShifter.style.left = -800+"px";
	// console.log('Done');
	randomGlass();
	for(let i=0; i < catButtons.length; i++) {
		catButtons[i].classList.remove('focused');
	}
	favoritesBtn.classList.add('focused');
}
function randomGlass () {
	// let rand = rand(0,3);
	let randColor = Math.random() * 80;
	catShifter.style.background = `rgba(${randColor},${randColor},${randColor},0.4)`;
	// console.log (rand);
}