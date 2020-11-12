let counterValue = 0;

const ref = {
    valueRef : document.querySelector('#value'),
    buttonDecrementRef : document.querySelector('[data-action="decrement"]'),
    buttonIncrementRef : document.querySelector('[data-action="increment"]'),
};


const renderValue = function () {
    ref.valueRef.textContent = counterValue;
};


const decrement = function () {
    counterValue -= 1;  
    renderValue();
    
};

const increment = function () {
    counterValue += 1;     
    renderValue();
    
};



ref.buttonDecrementRef.addEventListener('click', decrement);
ref.buttonIncrementRef.addEventListener('click', increment);



