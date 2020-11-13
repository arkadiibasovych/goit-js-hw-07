

const inputRef = document.querySelector('#validation-input');

const trueLength = Number(inputRef.dataset.length);


const handleAddClass = function (e) {
    inputRef.classList.add('invalid');
    

    if (e.target.value.length === trueLength) {
         inputRef.classList.remove('invalid');
         inputRef.classList.add('valid');
    }
}


inputRef.addEventListener('blur', handleAddClass)
   

