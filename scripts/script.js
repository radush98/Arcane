/*loader function*/
const dots = document.querySelector('#waiting-dots');

const waiter = setInterval(() => {
    if (dots.innerText === '...') {
        dots.innerText = '.';
    }
    else {
        dots.innerText += '.';
    }
}, 500);

window.onload = function () {
    /*clear loader*/
    delete dots;
    clearInterval(waiter);

    /*disable loader and show main content*/
    const waiting = document.querySelector('.waiting');
    waiting.style.display = 'none';

    const mainContent = document.querySelector('.wrapper');
    mainContent.style.display = 'block';

    /*main variables*/
    const playerBtn = document.querySelector('.home-footer-pause');//pause button
    const video = document.querySelector('#main-video');//video
    const cover = document.querySelector('#description-cover');

    /*play button logic*/
    playerBtn.addEventListener('click', () => {
        if (playerBtn.children[0].innerText === 'play video'.toUpperCase()) {
            playerBtn.children[0].innerText = 'pause video';
            video.play();
        }
        else {
            playerBtn.children[0].innerText = 'play video'.toUpperCase();
            video.pause();
        }
        playerBtn.children[1].classList.toggle('pause');
    })

    cover.addEventListener('click', () => {
        const header = document.querySelector('#description-text-header');
        header.innerText = "Zaun";
    })

}


