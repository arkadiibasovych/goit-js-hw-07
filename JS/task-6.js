

const inputRef = document.querySelector('#validation-input');

const trueLength = Number(inputRef.dataLength = '6');



inputRef.addEventListener('change', e => {
    

    inputRef.classList.add('invalid');
    

    if (e.target.value.length === trueLength) {
         inputRef.classList.remove('invalid');
         inputRef.classList.add('valid');
    }
    
})
   

