// TODO: random color palette on page load

const root = document.documentElement;

const colorPalettes = [
	{
		bgColor: '#fff',
		primColor: '#444',
		secColor: '#ccc',
	},
	{
		bgColor: '#444',
		primColor: '#fff',
		secColor: '#fff',
	},
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColorPalette() {
    let randomInt = getRandomInt(0, colorPalettes.length - 1);
    console.log(randomInt);

    root.style.setProperty('--bg-color', colorPalettes[randomInt].bgColor);
    root.style.setProperty('--primary-color', colorPalettes[randomInt].primColor);
    root.style.setProperty('--secondary-color', colorPalettes[randomInt].secColor);
}

window.addEventListener('load', randomColorPalette);