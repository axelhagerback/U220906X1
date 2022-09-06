console.log('IT IS')

build();

function build() {
    const targetCalc = document.getElementById('app');
    const divCalc = document.createElement('div');
    //divCalc.innerHTML = 'Calculator';
    // För css      title.className = 'red';
   targetCalc.appendChild(divCalc);

   const targetSett = document.getElementById('app');
   const divSett = document.createElement('div');
    //divSett.innerHTML = 'Settings';
   targetSett.appendChild(divSett);

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