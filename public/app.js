console.log('IT IS')

build();

function build() {
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    app.appendChild(divCalc);

    const divSett = document.createElement('div');
    divSett.setAttribute('id', 'settings');
    app.appendChild(divSett);

    
    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = "Calculator";
    divCalc.appendChild(titleCalc);

    
    const titleSett = document.createElement('h1');
    titleSett.innerHTML = "Settings";
    divSett.appendChild(titleSett);

    calculatorWindow(divCalc, divSett);

    settingsWindow(divSett, divCalc);
}

function calculatorWindow(divCalc, divSett) {

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'result');
    textarea.disabled = true;


    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    numberInput1.setAttribute('type', 'number');
    numberInput1.setAttribute('name', 'input1');
    numberInput1.autofocus = true;
    divCalc.appendChild(numberInput1);

    //Form elements must have labels: Element has no title attribute Element has no placeholder attribute



    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    numberInput2.setAttribute('type', 'number');
    numberInput2.setAttribute('name', 'input2');
    divCalc.appendChild(numberInput2);
    
    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', 'addition');
    btnAdd.innerText = '+';
    btnAdd.onclick = () => {
        textarea.append(numberInput1.value + " + " + numberInput2.value + " = "
        + (Number(numberInput1.value) + Number(numberInput2.value) + "\n"));
    }
    divCalc.appendChild(btnAdd);

    const btnSub = document.createElement('button');
    btnSub.setAttribute('id', 'subtraction');
    btnSub.innerText = '-';
    btnSub.onclick = () => {
        textarea.append(numberInput1.value + " - " + numberInput2.value + " = "
        + (Number(numberInput1.value) - Number(numberInput2.value)) + "\n") ;
    }
    divCalc.appendChild(btnSub);

    const btnMul = document.createElement('button');
    btnMul.setAttribute('id', 'multiplication');
    btnMul.innerText = '*';
    btnMul.onclick = () => {
        textarea.append(numberInput1.value + " * " + numberInput2.value + " = "
        + (Number(numberInput1.value) * Number(numberInput2.value) + "\n"));
    }
    divCalc.appendChild(btnMul);
    
    const btnDiv = document.createElement('button');
    btnDiv.setAttribute('id', 'division');
    btnDiv.innerText = '/';
    btnDiv.onclick = () => {
        textarea.append(numberInput1.value + " / " + numberInput2.value + " = "
        + (Number(numberInput1.value) / Number(numberInput2.value) + "\n"));
    }
    divCalc.appendChild(btnDiv);

    divCalc.appendChild(textarea);

    const btnClear = document.createElement('button');
    btnClear.setAttribute('id', 'clear');
    btnClear.innerText = 'Clear';
    btnClear.onclick = () => textarea.innerHTML = "";
    divCalc.appendChild(btnClear);

    const hideShowButton = document.createElement('button');
    hideShowButton.innerHTML = 'Hide/show';
    hideShowButton.onclick = () => divSett.hidden = !divSett.hidden;
    divCalc.appendChild(hideShowButton);

    settingsWindow(textarea);

}


    
function settingsWindow(divSett, divCalc, textarea) {

    const selectColor = document.createElement('select');
    selectColor.setAttribute('name', 'selectColor');
   
    const colorPink = document.createElement('option');
    colorPink.setAttribute('value', 'pink');
    colorPink.innerHTML = 'Pink';
   // selectColor.onchange = (event) => divCalc.className = event.target.value;
    selectColor.appendChild(colorPink);

    const colorGrey = document.createElement('option');
    colorGrey.setAttribute('value', 'grey');
    colorGrey.innerHTML = 'Grey';
   // selectColor.onchange = (event) => divCalc.className = event.target.value;
    selectColor.appendChild(colorGrey);

    const colorBlue = document.createElement('option');
    colorBlue.setAttribute('value', 'blue');
    colorBlue.innerHTML = 'Blue';
    //selectColor.onchange = (event) => divCalc.className = event.target.value;
    selectColor.appendChild(colorBlue);

    const colorYellow = document.createElement('option');
    colorYellow.setAttribute('value', 'yellow');
    colorYellow.innerHTML = 'Yellow';
    //selectColor.onchange = (event) => divCalc.className = event.target.value;
    selectColor.appendChild(colorYellow);

    //onclick på select som läser av vad som är valt
    //colorGrey.onclick = () => divCalc.style.backgroundColor = Grey;

    
    divSett.appendChild(selectColor);

    selectColor.onchange = (event) => {
        divCalc.classList.remove('pink');
        divCalc.classList.remove('grey');
        divCalc.classList.remove('blue');
        divCalc.classList.remove('yellow');
        divCalc.classList.add(event.target.value);
    };
    

    const selectFontSize = document.createElement('select');
    selectFontSize.setAttribute('name', 'selectFontSize');
   
    const fontSize12 = document.createElement('option');
    fontSize12.setAttribute('value', 'fontSizeSmall');
    fontSize12.innerHTML = '12';
    selectFontSize.onchange = (event) => divCalc.className = even
    selectFontSize.appendChild(fontSize12);

    const fontSize20 = document.createElement('option');
    fontSize20.setAttribute('value', 'fontSizeMedium');
    fontSize20.innerHTML = '20';
    selectFontSize.appendChild(fontSize20);

    const fontSize30 = document.createElement('option');
    fontSize30.setAttribute('value', 'fontSizeLarge');
    fontSize30.innerHTML = '30';
    selectFontSize.appendChild(fontSize30);

    divSett.appendChild(selectFontSize);

    selectFontSize.onchange = (event) => {
        result.className = event.target.value;
    };

}