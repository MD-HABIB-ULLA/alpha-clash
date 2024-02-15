function showletterById() {
    const display = document.getElementById('display');
    const showingLetter = genarateLetter();
    display.innerText = showingLetter;
    showElementById(showingLetter, 'bg-yellow-400');

}
function handleKeyboarPress(event) {
    const playerpresedKey = event.key;

    if (playerpresedKey === 'Escape') {
        showElementById('playGround', 'hidden');
        removeElementById('scoreboaed', 'hidden');
        (document.getElementById('gameScore')).innerText = document.getElementById('scroeDisplay').innerText;

        const lastCapital = document.getElementById('display')
        removeElementById((lastCapital.innerText).toLowerCase(), 'bg-yellow-400')
    }

    const needToPressKey = document.getElementById('display');
    const finalKey = (needToPressKey.innerText).toLowerCase();


    if (playerpresedKey === finalKey) {
        const scoredisplay = document.getElementById('scroeDisplay');
        const enitionalScore = parseInt(scoredisplay.innerText);
        const finalScore = enitionalScore + 1;
        scoredisplay.innerText = finalScore;


        removeElementById(playerpresedKey, 'bg-yellow-400');
        showletterById();

    } else {
        const lifedisplay = document.getElementById('lifeDisplay');
        const enitionalLife = parseInt(lifedisplay.innerText);


        if (enitionalLife > 1) {
            const finalLife = enitionalLife - 1;
            lifedisplay.innerText = finalLife;
        } else {
            showElementById('playGround', 'hidden');
            removeElementById('scoreboaed', 'hidden');
            (document.getElementById('gameScore')).innerText = document.getElementById('scroeDisplay').innerText;

            const lastCapital = document.getElementById('display')
            removeElementById((lastCapital.innerText).toLowerCase(), 'bg-yellow-400')
        }
    }
}
document.addEventListener('keyup', handleKeyboarPress);


function play() {
    const lifedisplayForAgain = document.getElementById('lifeDisplay');
    lifedisplayForAgain.innerText = 5;
    const scoredisplayForAgain = document.getElementById('scroeDisplay');
    scoredisplayForAgain.innerText = 0;

    showElementById('homeScreen', 'hidden');
    showElementById('scoreboaed', 'hidden');
    removeElementById('playGround', 'hidden');
    showletterById()
}
