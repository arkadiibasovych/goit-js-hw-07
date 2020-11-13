const ref = {
    fontSizeController: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

const handleChangeFontSize = function () {
    ref.text.style.fontSize = ref.fontSizeController.value + 'px'
}

ref.fontSizeController.addEventListener('input', handleChangeFontSize);
   


