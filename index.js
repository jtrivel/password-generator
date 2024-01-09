const passwordConfig = {
	characters:
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/',
	length: 15,
};

const passwordLength = 15;
const passOne = document.getElementById('pass-one');
const passTwo = document.getElementById('pass-two');
const generateButton = document.querySelector('.generate-btn');

const getRandomCharacter = () => {
	let randomChar = Math.floor(Math.random() * passwordConfig.characters.length);
	return passwordConfig.characters[randomChar];
};

const generatedRandomPassword = () => {
	let randomPassword = '';
	for (let i = 0; i < passwordLength; i++) {
		randomPassword += getRandomCharacter();
	}
	return randomPassword;
};

const displayPass = () => {
	const generatedPasswordOne = generatedRandomPassword();
	const generatedPasswordTwo = generatedRandomPassword();
	passOne.textContent = generatedPasswordOne;
	passTwo.textContent = generatedPasswordTwo;
};

generateButton.addEventListener('click', function () {
	displayPass();
});
