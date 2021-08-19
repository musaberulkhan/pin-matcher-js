function generateRandomPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generateRandomPin();
    }
}

document.getElementById('generate-pin-btn').addEventListener(
    'click', function () {
        document.getElementById('generate-pin-input').value = generateRandomPin();
    }
)

document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if(number == 'C'){
                calcInput.value = '';
            }
        }
        else {
            
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }

    })