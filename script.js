const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question');
const gif = document.querySelector('.gif')
const yesBtn = document.querySelector('.yes-btn')
const noBtn = document.querySelector('.no-btn')

let gifIndex = 0;

yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "I love you more ❤️😘"

    let gifSources = [
        "https://media.tenor.com/zhnbS6DI_60AAAAi/djnitish97-hug.gif",
        "https://media.tenor.com/UzuZvVZ6wFsAAAAi/djnitish97-hug.gif",
        "https://media.tenor.com/InCr9Sn28FcAAAAj/djnitish97-hug.gif",
    ];

    gif.src = gifSources[gifIndex];

    // Change the gif after 3 seconds
    setTimeout(() => {
        gifIndex = (gifIndex + 1) % gifSources.length; // Cycle through the gif sources
        gif.src = gifSources[gifIndex];
    }, 3000);
});

noBtn.addEventListener('mouseover', ()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left =randomX + 'px';
    noBtn.style.top =randomY + 'px' ;
})