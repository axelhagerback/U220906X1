console.log('IT IS')

build();

function build() {
    const targetCalc = document.getElementById('app');
    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    divCalc.className = 'border';
    targetCalc.appendChild(divCalc);

    const targetSett = document.getElementById('app');
    const divSett = document.createElement('div');
    divSett.setAttribute('id', 'settings');
    divSett.className = 'border';
    targetSett.appendChild(divSett);

    const targetDivCalc = document.getElementById('calculator');
    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = "Calculator";
    targetDivCalc.appendChild(titleCalc);

    const targetDivSett = document.getElementById('settings');
    const titleSett = document.createElement('h1');
    titleSett.innerHTML = "Settings";
    targetDivSett.appendChild(titleSett);
}
    






//console.log('sayHello called ...');
   // const contactPersonName = contactPerson.value;
   // console.log(contactPersonName);
    // document.getElementById('namePlaceHolder').innerHTML = contactPersonName;


    

    //skapa en div tagg för kalkylatorn

 /* document.onload = addElement();

    function addElement () {
        const newDiv = document.createElement('div');

        const newContent = document.createTextNode('Hi there and greetings!');

        newDiv.appendChild(newContent);

        const currentDiv = document.getElementById('app');
        document.body.insertBefore(newDiv, currentDiv);
    } */