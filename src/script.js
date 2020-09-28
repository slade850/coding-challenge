const bigButton = document.getElementById('myBigButton');

const createToast = () => {
    const toats = document.createElement('div');
    const p = document.createElement('p');
    document.body.appendChild(toats);
    p.innerText = "good job!";
    toats.appendChild(p);
    setTimeout(() => document.body.removeChild(toats), 3000)
}


bigButton.addEventListener('click', createToast)