
function pinMaker(){
    const pin = Math.round(Math.random() *10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return pinMaker();
    }
}

function generatePin(){
    document.getElementById('display-pin').value = pinMaker();
}


//calculator
document.getElementById('key-pad').addEventListener('click', function(event){
    const num = event.target.innerText;

    const calcInput = document.getElementById('calc-input-field');
    if(isNaN(num)){
        if(num == 'C'){
            calcInput.value = '';
        }
    }else{
        const previousNum = calcInput.value;
        const newNum = previousNum + num;
        calcInput.value = newNum;
    }

});

document.getElementById('submit-btn').addEventListener('click', function(){
    const generatedPin = document.getElementById('display-pin');
    const inputPin = document.getElementById('calc-input-field');

    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-failed');

    if(generatedPin.value == inputPin.value){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }else{
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})