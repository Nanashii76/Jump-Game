
const fire = document.querySelector(".fire");

// Adicionando o evento de pulo para qualquer tecla

const character = document.querySelector('.character');
const jump = () => {
    character.classList.add('jump');

    setTimeout(()=> {

        character.classList.remove('jump');

    },500)
}

//loop de verificação de colisão
const loop = setInterval(() =>{

    const firePosition = fire.offsetLeft;
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px',' ');

    if ( firePosition <= 90 && firePosition > 0 &&characterPosition < 90 ) {

        fire.style.animation = 'none';
        fire.style.left = `${firePosition}px`

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`

        character.src = 'images/game-over.png';
        character.style.width = '80px';
        character.style.marginLeft = '50px';

        clearInterval(loop);
    }


},10);


document.addEventListener('keydown', jump);

