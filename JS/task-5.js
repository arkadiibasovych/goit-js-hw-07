const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput : document.querySelector('#name-output')
};

ref.nameInput.addEventListener('input', e => {
    ref.nameOutput.textContent = e.target.value;
    if (e.target.value.length < 1) {
       ref.nameOutput.textContent = 'незнакомец'
   }
});

