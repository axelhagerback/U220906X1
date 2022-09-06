console.log('IT IS')

build();
calculatorWindow();

function build() {
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    divCalc.className = 'border';
    app.appendChild(divCalc);

    const divSett = document.createElement('div');
    divSett.setAttribute('id', 'settings');
    divSett.className = 'border';
    app.appendChild(divSett);

    
    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = "Calculator";
    divCalc.appendChild(titleCalc);

    
    const titleSett = document.createElement('h1');
    titleSett.innerHTML = "Settings";
    divSett.appendChild(titleSett);

    calculatorWindow(divCalc);
}

function calculatorWindow(divCalc) {
    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1')
    divCalc.appendChild(numberInput1);




    //Form elements must have labels: Element has no title attribute Element has no placeholder attribute
    const numberLabel2 = document.createElement('label');
    numberLabel2.setAttribute('id', 'label2');
    numberLabel2.setAttribute('for', 'number2');
    divCalc.appendChild(numberLabel2);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    numberInput2.setAttribute('name', 'number2');
    divCalc.appendChild(numberInput2);





    
    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('id', 'addition');
    btnAdd.innerText = '+';
    divCalc.appendChild(btnAdd);

    const btnSub = document.createElement('button');
    btnSub.setAttribute('id', 'subtraction');
    btnSub.innerText = '-';
    divCalc.appendChild(btnSub);

    const btnMul = document.createElement('button');
    btnMul.setAttribute('id', 'multiplication');
    btnMul.innerText = '*';
    divCalc.appendChild(btnMul);
    
    const btnDiv = document.createElement('button');
    btnDiv.setAttribute('id', 'division');
    btnDiv.innerText = '/';
    divCalc.appendChild(btnDiv);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'result');
    textarea.disabled = true;
    divCalc.appendChild(textarea);

    const btnClear = document.createElement('button');
    btnClear.setAttribute('id', 'clear');
    btnClear.innerText = 'Clear';
    divCalc.appendChild(btnClear);


}

    
function settingsWindow() {
    const colorOption = document.createElement('option');
}