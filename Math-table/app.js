//Math Table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function(){
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input', function(){
    let selectedMultiplier = Number(rangeEl.value);
    document.querySelector('#multiples').innerText = selectedMultiplier;
    calculate();
});

//Calculate

let calculate = () => {
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier = Number(document.querySelector('#multiples').innerText);
    let mathResult = theNumber * multiplier;
    document.querySelector('#result').innerText = mathResult;
}