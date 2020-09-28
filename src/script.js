const bigButton = document.getElementById('myBigButton');
const autoWrite = document.getElementById('autoWrite');

const text = "voici un superbe text qui ne sert a rien mais c'est bien!"

const createText = () => {
    text.split('').forEach((t, i) => {
        setTimeout(autoWrite.innerText(text.slice(0,i)), 100)
    })
}


bigButton.addEventListener('click', createText)