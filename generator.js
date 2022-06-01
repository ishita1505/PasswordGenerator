const resultEle = document.getElementById('result');
const lengthEle = document.getElementById('length');
const lowercaseEle = document.getElementById('lowercase');
const uppercaseEle = document.getElementById('uppercase');
const numberEle = document.getElementById('number');
const symbolsEle = document.getElementById('symbols');
const generateEle = document.getElementById('generate');
const clipboardEle = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
Clipboard.addEventListener('click', () =>{
    const area = document.createElement('textarea');
    const password = resultEle.innerText;

    if(!password) {return;}

    area.value = password;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    alert('Password copied to clipboard');
});


generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+48);
}
function getRandomSymbol()
{
    const Symbol='!@#$%^&/'
    return Symbol[(Math.floor(Math.random()*Symbol.length))];
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});