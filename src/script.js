const bigButton = document.getElementById('myBigButton');
const autoWrite = document.getElementById('autoWrite');

const text = "voici un superbe text qui ne sert a rien mais c'est bien!"

let index = 0;

const createText = () => {
    index <= text.length ? index++ : index = 1;
    autoWrite.innerText = text.slice(0,index)
}


bigButton.addEventListener('click', () => {
    const interval = setInterval(createText, 100);
    if(index == text.length){ clearInterval(interval)};
}, true)