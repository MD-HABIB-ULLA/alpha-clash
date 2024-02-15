function showElementById(parameterToShow, cssclass) {
    const getHomeScreen = document.getElementById(parameterToShow);
    getHomeScreen.classList.add(cssclass);
}
function removeElementById(parameterToRemve ,cssclass) {
    const getHomeScreen = document.getElementById(parameterToRemve);
    getHomeScreen.classList.remove(cssclass);
}

// genarateARendomNumber

function genarateLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz/';
    const splitLetters = letters.split('');
    const index = genarateARendomNumber();
    return splitLetters[index];

}

function genarateARendomNumber() {
    const randomNumber = Math.random() * 26;
    const roundNumber = Math.round(randomNumber);
    return roundNumber;
}

