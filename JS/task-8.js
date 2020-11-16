const ref = {
    number: document.querySelector('#controls > input'),
    renderButton: document.querySelector('[data-action="render"]'),
    destroyButton: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes')
};


// получаем количество создаваемых дивов
let amount = 0;

const getValue = function (e) {

const minValue = Number(ref.number.min);
const maxValue = Number(ref.number.max);   
    
  amount = Number(e.target.value);
    
    if (amount > maxValue) {
        amount = maxValue;
    };

     if (amount < minValue) {
        amount = minValue;
    }

    return (amount);

}


ref.number.addEventListener('change', getValue);


// создание дивов внутри <div id="boxes"</div>

const getColor = function(){
    return '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
}


const createBoxes = function () {
    for (let i = 0; i < (amount); i += 1) {
        let divSize = 30;
        const box = document.createElement('div');
        box.setAttribute('style', `width: ${divSize + i*10}px; height:${divSize + i*10}px; background-color: ${getColor()}`);
        ref.boxes.appendChild(box);

    }
}



ref.renderButton.addEventListener('click', createBoxes)



// удалаение контента внутри <div id="boxes"</div>

const destroyBoxes = function () {
    ref.boxes.textContent = '';
}

ref.destroyButton.addEventListener('click', destroyBoxes)
