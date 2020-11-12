const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput : document.querySelector('#name-output')
};


console.log(ref.nameOutput.textContent);

ref.nameInput.addEventListener('input', e => { ref.nameOutput.textContent = e.target.value;});
