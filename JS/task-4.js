let counterValue = 0;

const ref = {
    valueRef : document.querySelector('#value'),
    buttonDecrementRef : document.querySelector('[data-action="decrement"]'),
    buttonIncrementRef : document.querySelector('[data-action="increment"]'),
};


const decrement = function () {
    counterValue -= 1;  
    renderValue();
    
};

const increment = function () {
    counterValue += 1;     
    renderValue();
    
};

const renderValue = function () {
    ref.valueRef.textContent = counterValue;
}

ref.buttonDecrementRef.addEventListener('click', decrement);
ref.buttonIncrementRef.addEventListener('click', increment);

