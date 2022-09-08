console.log('IT IS')

build();

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

    calculatorWindow(divCalc, divSett);

    settingsWindow(divSett);
}

function calculatorWindow(divCalc, divSett) {

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

    const hideShowButton = document.createElement('button');
    hideShowButton.innerHTML = 'Hide/show';
    hideShowButton.onclick = () => divSett.hidden = !divSett.hidden;
    divCalc.appendChild(hideShowButton);


}

    
function settingsWindow(divSett) {

   /*  const dropdown = document.createElement('select');

    app.appendChild(dropdown);

    options = ["Blue", "Yellow", "Green"];


    options.forEach((option) => {
        tag = document.createElement("option");
        tag.innerHTML = option;
        dropdown.appendChild(tag);
    }) */


    const selectColor = document.createElement('select');
    selectColor.setAttribute('name', 'selectColor');
   
    const colorGrey = document.createElement('option');
    colorGrey.setAttribute('value', 'grey');
    colorGrey.innerHTML = 'Grey';
    selectColor.appendChild(colorGrey);

    const colorBlue = document.createElement('option');
    colorBlue.setAttribute('value', 'blue');
    colorBlue.innerHTML = 'Blue';
    selectColor.appendChild(colorBlue);

    const colorYellow = document.createElement('option');
    colorYellow.setAttribute('value', 'yellow');
    colorYellow.innerHTML = 'Yellow';
    selectColor.appendChild(colorYellow);

    //onclick på select som läser av vad som är valt

    divSett.appendChild(selectColor);


    const selectFontSize = document.createElement('select');
    selectFontSize.setAttribute('name', 'selectFontSize');
   
    const fontSize12 = document.createElement('option');
    fontSize12.setAttribute('value', 'fontSizeSmall');
    fontSize12.innerHTML = '12';
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

}