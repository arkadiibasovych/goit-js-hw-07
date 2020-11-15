const ref = {
    number: document.querySelector('#controls > input'),
    renderButton: document.querySelector('[data-action="render"]'),
    destroyButton: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
};

const minValue = Number(ref.number.min);
const maxValue = Number(ref.number.max);

const getValue = function (e) {
    
   let value = Number(e.target.value);
    if (value > maxValue) {
        value = maxValue;
    };

     if (value < minValue) {
        value = minValue;
    }

    console.log(value)

    
}
ref.number.addEventListener('change', getValue);

