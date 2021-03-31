const mainUpdate = document.querySelector('#mainUpdate');
const ammountOutput = document.querySelector('#colorAmmount');
const covering = 6.5;

let enteredValue = document.querySelector('#enteredSurfaceSize');

mainUpdate.addEventListener('input', () => {
    ammountOutput.textContent = CalculateColorAmmount();
});


function CalculateColorAmmount(){
    return (enteredValue.value / covering).toFixed(2);
}